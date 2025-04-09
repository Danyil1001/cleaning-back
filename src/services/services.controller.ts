import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './entities/services.entity';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) { }

    @Get()
    findAll(): Promise<Service | null> {
        return this.servicesService.getServices()
    }

    @Get('/cleaning')
    getCleaningOptions(): Promise<Service | null> {
        return this.servicesService.getCleaningOptions()
    }
}
