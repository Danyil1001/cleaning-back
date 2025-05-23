import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/services.entity';
import { EmailService } from 'src/email/email.service';
import { getRequestTemplate, getRequestTemplateForRepair } from 'src/email/templates/email-request';
import { ServiceRequestDto } from './dto/service-request.dto';
import { ServicesOptionsService } from 'src/services_options/services_options.service';
import { ServicesEnum } from './enum/services.enum';
import { ServiceRepairRequestDto } from './dto/service-request-repair.dto';
import { ClientRequestService } from 'src/client-requests/client-requests.service';

type ServiceItemTypeMap = {
  [key: string]: {
    id: number;
    amount: number;
    price: number;
    time: number;
  }[];
};

export type ServiceOptionDto = {
  id: number;
  type: string;
  title: string;
  serviceItemTypes: ServiceItemTypeMap;
};

export type ServiceDto = {
  id: number;
  type: string;
  options: ServiceOptionDto[];
};

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepo: Repository<Service>,
    private emailService: EmailService,
    @Inject(forwardRef(() => ServicesOptionsService))
    private serviceOptionsService: ServicesOptionsService,
    // @Inject(forwardRef(() => ClientRequestService))
    private clientRequestService: ClientRequestService,
  ) { }

  async getOneByType(serviceEnum: ServicesEnum): Promise<Service | null> {
    const service = await this.serviceRepo.findOne({
      where: {
        type: serviceEnum
      }
    })
    return service
  }

  async getServices(): Promise<ServiceDto[]> {
    const services = await this.serviceRepo.find({
      relations: [
        'options',
        'options.serviceOptionItemAmountPrices',
        'options.serviceOptionItemAmountPrices.serviceItemType',
      ],
    });

    return services.map((service): ServiceDto => {
      return {
        id: service.id,
        type: service.type,
        options: service.options.map((option): ServiceOptionDto => {
          const serviceItemTypes = option.serviceOptionItemAmountPrices.reduce<ServiceItemTypeMap>(
            (acc, priceItem) => {
              const itemType = priceItem.serviceItemType.type;
              if (!acc[itemType]) {
                acc[itemType] = [];
              }
              acc[itemType].push({
                id: priceItem.id,
                amount: Number(priceItem.amount),
                price: priceItem.price,
                time: priceItem.time,
              });
              return acc;
            },
            {},
          );

          Object.keys(serviceItemTypes).forEach(key => {
            serviceItemTypes[key].sort((a, b) => a.amount - b.amount);
          });

          return {
            id: option.id,
            type: option.type,
            title: option.title,
            serviceItemTypes,
          };
        }),
      };
    });
  }

  async getCleaningOptions(): Promise<ServiceOptionDto[]> {
    const services = await this.getServices();
    const options: ServiceOptionDto[] = [];

    const cleaningService = services.find(
      serviceItem => serviceItem.type === 'cleaning'
    );

    const complexService = services.find(serviceItem => serviceItem.type === 'cleaning_moving');


    if (cleaningService) {
      options.push(...cleaningService.options);
    }

    if (complexService) {
      options.push(...complexService.options);
    }

    return options
  }

  async getMovingOptions(): Promise<ServiceOptionDto[]> {
    const services = await this.getServices();
    const movingService = services.find(serviceItem => serviceItem.type === 'moving');
    const complexService = services.find(serviceItem => serviceItem.type === 'cleaning_moving');

    const options: ServiceOptionDto[] = [];

    if (movingService) {
      options.push(...movingService.options);
    }

    if (complexService) {
      options.push(...complexService.options);
    }

    return options;
  }

  async sendRequestForService(serviceRequestDto: ServiceRequestDto): Promise<void> {
    const serviceOption = await this.serviceOptionsService.getOneById(serviceRequestDto.service_id);
    if (serviceOption) {
      const basicData = {
        clientName: serviceRequestDto.name,
        email: serviceRequestDto.email,
        address: serviceRequestDto.address || '',
        phone_number: serviceRequestDto.phone_number,
      }
      console.log('serviceOption')
      console.log(serviceOption)

      this.clientRequestService.saveClientRequest(basicData, serviceOption)
      await this.emailService.sendMail(
        getRequestTemplate({
          ...basicData,
          serviceName: serviceOption?.title || '',
          ...(serviceRequestDto.bathroom_amount && { amountOfBathrooms: serviceRequestDto.bathroom_amount === -1 ? 'Too many rooms' : serviceRequestDto.bathroom_amount }),
          amountOfRooms: serviceRequestDto.rooms_amount === -1 ? 'Too many rooms' : serviceRequestDto.rooms_amount,
          amountOfStoreRooms: serviceRequestDto.stores_amount === -1 ? 'Too many rooms' : serviceRequestDto.stores_amount,
          price: serviceRequestDto.price || 'Has to be discussed',
          time: serviceRequestDto.time || 'Has to be discussed',
          moving_from: serviceRequestDto.moving_from,
          moving_to: serviceRequestDto.moving_to,
        }),
      );
    }
  }

  async sendRequestForRepair(serviceRequestDto: ServiceRepairRequestDto) {

    const basicData = {
      clientName: serviceRequestDto.name,
      email: serviceRequestDto.email,
      address: serviceRequestDto.address || '',
      phone_number: serviceRequestDto.phone_number,
    }

    this.clientRequestService.saveClientRequest(basicData)

    await this.emailService.sendMail(
      getRequestTemplateForRepair({
        clientName: serviceRequestDto.name,
        email: serviceRequestDto.email,
        address: serviceRequestDto.address || '',
        phone_number: serviceRequestDto.phone_number,
      }),
    );
  }
}
