import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientRequest } from './entities/client-requests.entity';
import { ClientRequestDto } from './dto/client-request.dto';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';

@Injectable()
export class ClientRequestService {
  constructor(
    @InjectRepository(ClientRequest)
    private clientRequestRepo: Repository<ClientRequest>,
  ) { }

  public saveClientRequest(clientRequestData: ClientRequestDto, serviceOption?: ServiceOption) {
    this.clientRequestRepo.save({
      ...clientRequestData,
      ...(serviceOption && { option: serviceOption })
    })
  }
}
