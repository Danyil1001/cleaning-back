import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './entities/services.entity';
import {  ServiceRequestDto } from './dto/service-request.dto';

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

    @Get('/moving')
    getMovingOptions(): Promise<Service | null> {
        return this.servicesService.getMovingOptions()
    }

    @Post('/request')
    sendRequestForService(@Body() serviceRequestDto:ServiceRequestDto): Promise<Service | null> {
        return this.servicesService.sendRequestForService(serviceRequestDto)
    }
}
