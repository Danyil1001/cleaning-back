import { forwardRef, Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/services.entity';
import { EmailModule } from 'src/email/email.module';
import { ServicesOptionsModule } from 'src/services_options/services_options.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Service]),
    EmailModule,
    forwardRef(() => ServicesOptionsModule),
  ],
  providers: [
    ServicesService,
  ],
  controllers: [ServicesController],
  exports: [ServicesService]
})
export class ServicesModule { }
