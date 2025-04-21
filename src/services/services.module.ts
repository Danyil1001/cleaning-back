import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/services.entity';
import { EmailModule } from 'src/email/email.module';
import { ServicesOptionsModule } from 'src/services_options/services_options.module';
import { ServicesOptionsService } from 'src/services_options/services_options.service'; // Import the service

@Module({
  imports: [
    TypeOrmModule.forFeature([Service]),
    EmailModule,
    ServicesOptionsModule,
  ],
  providers: [
    ServicesService,
  ],
  controllers: [ServicesController],
})
export class ServicesModule { }
