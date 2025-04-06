import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesOptionsSeedService } from './services_options.service';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { Service } from 'src/services/entities/services.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceOption, Service])],
  providers: [ServicesOptionsSeedService],
  exports: [ServicesOptionsSeedService],
})
export class ServicesOptionsSeedModule { }
