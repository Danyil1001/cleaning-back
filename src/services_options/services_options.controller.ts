import { Controller, Get, Query } from '@nestjs/common';
import { ServicesOptionsService } from './services_options.service';
import { ServicesEnum } from 'src/services/enum/services.enum';

@Controller('services-options')
export class ServicesOptionsController {

    constructor(private readonly servicesOptionService: ServicesOptionsService) { }

    @Get('')
    getServiceOptions(@Query('type') type: ServicesEnum, @Query('add_complex') add_complex: string): Promise<any[]> {
        return this.servicesOptionService.getServiceOptions(type, add_complex);
    }

}
