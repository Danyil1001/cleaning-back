import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/services.entity';
import { title } from 'process';


@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepo: Repository<Service>,
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
    console.log('filteredServices')
    console.log(services)

    const filteredServices = services.find((serviceItem) => serviceItem.type === 'cleaning')

    if (filteredServices) {
      console.log(filteredServices)
      return filteredServices.options
    }
    return []
  }
}
