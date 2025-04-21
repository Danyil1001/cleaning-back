import { Module } from '@nestjs/common';
import { ServicesOptionsService } from './services_options.service';
import { ServicesOptionsController } from './services_options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOption } from './entities/services_options.entity';

@Module({
   imports: [TypeOrmModule.forFeature([ServiceOption])],
  providers: [ServicesOptionsService],
  controllers: [ServicesOptionsController],
  exports:[ServicesOptionsService]
})
export class ServicesOptionsModule {}
