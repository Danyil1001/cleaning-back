import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ServiceOption } from './entities/services_options.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServicesOptionsService {
    constructor(
        @InjectRepository(ServiceOption)
        private servicesOptionsRepo: Repository<ServiceOption>
    ) { }

    async getOneById(id: number) {
        return this.servicesOptionsRepo.findOne({ where: { id } })
    }

}
