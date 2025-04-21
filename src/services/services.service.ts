import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/services.entity';
import { title } from 'process';
import { EmailService } from 'src/email/email.service';
import { getRequestTemplate } from 'src/email/templates/email-request';
import { ServiceRequestDto } from './dto/service-request.dto';
import { ServicesOptionsService } from 'src/services_options/services_options.service';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';


@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepo: Repository<Service>,
    private emailService: EmailService,
    private serviceOptionsService: ServicesOptionsService,
  ) { }

  async getServices(): Promise<any> {
    const services = await this.serviceRepo.find({
      relations: [
        'options',
        'options.serviceOptionItemAmountPrices',
        'options.serviceOptionItemAmountPrices.serviceItemType',
      ],
    });

    return services.map(service => {
      const serviceDto: any = {
        id: service.id,
        type: service.type,
        options: service.options.map(option => {
          const optionDto: any = {
            id: option.id,
            type: option.type,
            title: option.title,
          };

          optionDto.serviceItemTypes = option.serviceOptionItemAmountPrices.reduce(
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
          Object.keys(optionDto.serviceItemTypes).forEach(key => {
            optionDto.serviceItemTypes[key].sort((a, b) => a.amount - b.amount);
          });

          return optionDto;
        }),
      };

      return serviceDto;
    });
  }

  async getCleaningOptions() {
    const services = await this.getServices()
    const filteredServices = services.find((serviceItem) => serviceItem.type === 'cleaning')

    if (filteredServices) {
      console.log(filteredServices)
      return filteredServices.options
    }
    return []
  }

  async sendRequestForService(serviceRequestDto: ServiceRequestDto) {

    const serviceOption = await this.serviceOptionsService.getOneById(serviceRequestDto.service_id)
    if (serviceOption) {
      return this.emailService.sendMail(getRequestTemplate(
        {
          clientName: serviceRequestDto.name,
          serviceName: serviceOption?.title || '',
          email: serviceRequestDto.email,
          address: serviceRequestDto.address || '',
          amountOfBathrooms: serviceRequestDto.bathroom_amount || 'More than 8',
          amountOfRooms: serviceRequestDto.rooms_amount || 'More than 8',
          amountOfStoreRooms: serviceRequestDto.stores_amount || 'More than 8',
          price: serviceRequestDto.price || "Has to be dissccused",
          time: serviceRequestDto.time || "Has to be dissccused",
          phone_number: serviceRequestDto.phone_number
        }
      ))
    }

  }
}
