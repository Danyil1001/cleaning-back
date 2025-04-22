import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { Service } from 'src/services/entities/services.entity';
import { ServicesOptionsEnum } from 'src/services_options/enum/services_options.enum';
import { ServicesEnum } from 'src/services/enum/services.enum';

@Injectable()
export class ServicesOptionsSeedService {
  constructor(
    @InjectRepository(ServiceOption)
    private readonly serviceOptionRepository: Repository<ServiceOption>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) { }

  async run() {

    const serviceOptions = [
      {
        type: ServicesOptionsEnum.CLEANING_AFTER_REPAIR,
        title: "Reinigung nach Renovierung",
        description: 'Tiefenreinigung von Baustaub, Schmutz und Materialrückständen. Beinhaltet das Waschen von Fenstern, Böden, Wänden und allen Oberflächen, um den Raum vollständig bezugsfertig zu machen',
        serviceType: 'CLEANING',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
      },
      {
        type: ServicesOptionsEnum.CLEANING_BEFORE_MOVE,
        title: "Reinigung vor der Übergabe",
        description: 'Endreinigung der Räumlichkeiten vor der Übergabe. Dazu gehört die Reinigung von Oberflächen, Fenstern, Bädern und Küchen, um die Immobilie in einen perfekten Zustand zu versetzen',
        serviceType: 'CLEANING',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
      },
      {
        type: ServicesOptionsEnum.CLEANING_GENEARL,
        title: "Allgemeine Reinigung",
        description: 'Umfassende und gründliche Reinigung aller Oberflächen, Möbel, Geräte, Fenster, Böden und schwer zugänglichen Stellen, um eine perfekt saubere Umgebung zu gewährleisten',
        serviceType: 'CLEANING',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
      },
      {
        type: ServicesOptionsEnum.MOVING,
        title: 'Umzug',
        serviceType: 'MOVING',
        description: 'Umzug bietet Unterstützung beim sicheren Transport Ihrer Möbel und persönlichen Gegenstände. Wir kümmern uns um Verpackung und Entladung, damit Ihr Umzug verläuft.',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
      },
      {
        type: ServicesOptionsEnum.CLEANING_MOVING,
        title: 'Umfassender Service',
        serviceType: 'CLEANING_MOVING',
        description: 'Ein umfassender Service kombiniert Reinigung und Transport. Wir kümmern uns um den sicheren Transport Ihrer Möbel und die Reinigung Ihrer alten und neuen Wohnung',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
      },
    ];

    for (const option of serviceOptions) {
      const service = await this.serviceRepository.findOne({
        where: { type: ServicesEnum[option.serviceType] },
      })

      if (!service) {
        continue;
      }

      const existingOption = await this.serviceOptionRepository.findOne({
        where: { type: option.type, service: { id: service.id } },
      });

      if (!existingOption) {

        const serviceOption = this.serviceOptionRepository.create({
          service,
          type: option.type,
          title: option.title,
          description: option.description,
          avg_min_time: option.avg_min_time,
          avg_max_time: option.avg_max_time,
          avg_min_price: option.avg_min_price,
          avg_max_price: option.avg_max_price
        });

        await this.serviceOptionRepository.save(serviceOption);
      }
    }
  }
}
