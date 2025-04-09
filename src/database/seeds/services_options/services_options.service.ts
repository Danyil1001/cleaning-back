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
      { type: ServicesOptionsEnum.CLEANING_AFTER_REPAIR, title: "Reinigung nach Renovierung", serviceType: 'CLEANING' },
      { type: ServicesOptionsEnum.CLEANING_BEFORE_MOVE, title: "Reinigung vor der Übergabe", serviceType: 'CLEANING' },
      { type: ServicesOptionsEnum.CLEANING_GENEARL, title: "Reinigung vor der Übergabe", serviceType: 'CLEANING' },
      { type: ServicesOptionsEnum.MOVING, title: 'Umzug', serviceType: 'MOVING' },
    ];

    for (const option of serviceOptions) {
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
          title: option.title
        });

        await this.serviceOptionRepository.save(serviceOption);
      }
    }
  }
}
