import { Service } from 'src/services/entities/services.entity';
import { ServicesEnum } from 'src/services/enum/services.enum';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesSeedService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) { }

  async run() {

    const services = [
      { type: ServicesEnum.CLEANING },
      { type: ServicesEnum.MOVING },
    ];

    for (const service of services) {
      const existingService = await this.serviceRepository.findOneBy({
        type: service.type,
      });

      if (!existingService) {
        await this.serviceRepository.save(service);
        console.log(`Inserted service: ${service.type}`);
      } else {
        console.log(`Service ${service.type} already exists.`);
      }
    }
  }
}
