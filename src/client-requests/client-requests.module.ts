import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRequest } from './entities/client-requests.entity';
import { ClientRequestService } from './client-requests.service';
import { ClientRequestController } from './client-requests.controller';
import { ServicesOptionsModule } from 'src/services_options/services_options.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientRequest]),
    forwardRef(() => ServicesOptionsModule),
  ],
  providers: [
    ClientRequestService,
  ],
  controllers: [ClientRequestController],
  exports: [ClientRequestService]
})
export class ClientRequestModule { }
