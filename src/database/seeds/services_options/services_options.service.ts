import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { Service } from 'src/services/entities/services.entity';
import { ServicesOptionsEnum } from 'src/services_options/enum/services_options.enum';
import { ServicesEnum } from 'src/services/enum/services.enum';

@Injectable()
export class ServicesOptionsSeedService {
  constructor(
    @InjectRepository(ServiceOption)
    private readonly serviceOptionRepository: Repository<ServiceOption>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) { }

  async run() {

    const serviceOptions = [
      { type: ServicesOptionsEnum.CLEANING_AFTER_REPAIR, serviceType: 'cleaning' },
      { type: ServicesOptionsEnum.CLEANING_BEFORE_MOVE, serviceType: 'cleaning' },
      { type: ServicesOptionsEnum.CLEANING_GENEARL, serviceType: 'cleaning' },
      { type: ServicesOptionsEnum.MOVING, serviceType: 'moving' },
    ];

    for (const option of serviceOptions) {
      const service = await this.serviceRepository.findOne({
        where: { type: ServicesEnum[option.serviceType] },
      })
  
      if (!service) {
        console.log(`Service ${option.serviceType} not found.`);
        continue;
      }

      const existingOption = await this.serviceOptionRepository.findOne({
        where: { type: option.type, service: { id: service.id } },
      });

      if (!existingOption) {
        const serviceOption = this.serviceOptionRepository.create({
          type: option.type,
          service,
        });

        await this.serviceOptionRepository.save(serviceOption);
        console.log(`Inserted service option: ${option.type} for service ${option.serviceType}`);
      } else {
        console.log(`Service option ${option.type} for service ${option.serviceType} already exists.`);
      }
    }
  }
}
