import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ServiceOption } from './entities/services_options.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicesService } from 'src/services/services.service';
import { ServicesEnum } from 'src/services/enum/services.enum';
import { Service } from 'src/services/entities/services.entity';

@Injectable()
export class ServicesOptionsService {
    constructor(
        @InjectRepository(ServiceOption)
        private servicesOptionsRepo: Repository<ServiceOption>,
        @Inject(forwardRef(() => ServicesService))
        private serviceService: ServicesService,
    ) { }

    async getOneById(id: number) {
        return this.servicesOptionsRepo.findOne({ where: { id } })
    }

    async getServiceOptions(type: ServicesEnum, add_complex: string) {
        let complex: any = null
        const service = await this.serviceService.getOneByType(type)

        if (service) {
            const options = await this.servicesOptionsRepo.find({
                where: {
                    service: service
                }
            })
            if (add_complex) {
                complex = await this.serviceService.getOneByType(ServicesEnum.CLEANING_MOVING)
                const complexOption = await this.servicesOptionsRepo.findOne({
                    where: {
                        service: complex
                    }
                })
                if (complexOption) {
                    options.push(complexOption)
                }
            }
            return options
        }
        return []
    }

}
