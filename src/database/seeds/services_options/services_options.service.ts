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
      { type: ServicesOptionsEnum.CLEANING_AFTER_REPAIR, serviceType: 'CLEANING' },
      { type: ServicesOptionsEnum.CLEANING_BEFORE_MOVE, serviceType: 'CLEANING' },
      { type: ServicesOptionsEnum.CLEANING_GENEARL, serviceType: 'CLEANING' },
      { type: ServicesOptionsEnum.MOVING, serviceType: 'MOVING' },
    ];

    for (const option of serviceOptions) {

      console.log(ServicesEnum[option.serviceType])
      const service = await this.serviceRepository.findOne({
        where: { type: ServicesEnum[option.serviceType] },
      })
   
      if (!service) {
        continue;
      }

      const existingOption = await this.serviceOptionRepository.findOne({
        where: { type: option.type, service: { id: service.id } },
      });

      if (!existingOption) {

        const serviceOption = this.serviceOptionRepository.create({
          service,
          type: option.type,
        });

        await this.serviceOptionRepository.save(serviceOption);
      }
    }
  }
}
