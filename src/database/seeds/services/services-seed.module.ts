import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesSeedService } from './services-seed.service';
import { Service } from 'src/services/entities/services.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServicesSeedService],
  exports: [ServicesSeedService],
})
export class ServicesSeedModule { }
