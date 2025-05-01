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
        let complex: any = null;
        const service = await this.serviceService.getOneByType(type);

        if (service) {
            const options = await this.servicesOptionsRepo.find({
                where: {
                    service: service,
                },
            });

            // Add complex service option if needed
            if (add_complex) {
                complex = await this.serviceService.getOneByType(ServicesEnum.CLEANING_MOVING);
                const complexOption = await this.servicesOptionsRepo.findOne({
                    where: {
                        service: complex,
                    },
                });
                if (complexOption) {
                    options.push(complexOption);
                }
            }

            // Add the full image URL to each option
            const optionsWithImageUrls = options.map(option => {
                return {
                    ...option,
                    image_url: option.image_name ? `uploads/${option.image_name}` : "",  // Add the full image URL
                };
            });

            return optionsWithImageUrls;
        }
        return [];
    }


}
