import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceDto, ServiceOptionDto, ServicesService } from './services.service';
import { ServiceRequestDto } from './dto/service-request.dto';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) { }

    @Get()
    findAll(): Promise<ServiceDto[]> {
        return this.servicesService.getServices()
    }

    @Get('/cleaning')
    getCleaningOptions(): Promise<ServiceOptionDto[]> {
        return this.servicesService.getCleaningOptions()
    }

    @Get('/moving')
    getMovingOptions(): Promise<ServiceOptionDto[]> {
        return this.servicesService.getMovingOptions()
    }

    @Post('/request')
    sendRequestForService(@Body() serviceRequestDto: ServiceRequestDto): Promise<void> {
        return this.servicesService.sendRequestForService(serviceRequestDto)
    }
}
