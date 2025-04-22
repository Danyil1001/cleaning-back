import { forwardRef, Module } from '@nestjs/common';
import { ServicesOptionsService } from './services_options.service';
import { ServicesOptionsController } from './services_options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOption } from './entities/services_options.entity';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceOption]),
    forwardRef(() => ServicesModule),
  ],
  providers: [ServicesOptionsService],
  controllers: [ServicesOptionsController],
  exports: [ServicesOptionsService]
})
export class ServicesOptionsModule { }
