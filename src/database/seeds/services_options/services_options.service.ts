import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { Service } from 'src/services/entities/services.entity';
import { ServicesOptionsEnum } from 'src/services_options/enum/services_options.enum';
import { ServicesEnum } from 'src/services/enum/services.enum';

const CLEANING = 'CLEANING'
const MOVING = 'MOVING'
const CLEANING_MOVING = 'CLEANING_MOVING'
const REPAIR = 'REPAIR'

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
        serviceType: CLEANING,
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
        image_name: 'after-repair-cleaning.svg'
      },
      {
        type: ServicesOptionsEnum.CLEANING_BEFORE_MOVE,
        title: "Reinigung vor der Übergabe",
        description: 'Endreinigung der Räumlichkeiten vor der Übergabe. Dazu gehört die Reinigung von Oberflächen, Fenstern, Bädern und Küchen, um die Immobilie in einen perfekten Zustand zu versetzen',
        serviceType: CLEANING,
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
        image_name: 'before-move-cleaning.svg'
      },
      {
        type: ServicesOptionsEnum.CLEANING_GENEARL,
        title: "Allgemeine Reinigung",
        description: 'Umfassende und gründliche Reinigung aller Oberflächen, Möbel, Geräte, Fenster, Böden und schwer zugänglichen Stellen, um eine perfekt saubere Umgebung zu gewährleisten',
        serviceType: CLEANING,
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
        image_name: 'general-cleaning.svg'

      },
      {
        type: ServicesOptionsEnum.MOVING,
        title: 'Umzug',
        serviceType: MOVING,
        description: 'Umzug bietet Unterstützung beim sicheren Transport Ihrer Möbel und persönlichen Gegenstände. Wir kümmern uns um Verpackung und Entladung, damit Ihr Umzug verläuft.',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
        image_name: 'moving.svg'
      },
      {
        type: ServicesOptionsEnum.CLEANING_MOVING,
        title: 'Umfassender Service',
        serviceType: CLEANING_MOVING,
        description: 'Ein umfassender Service kombiniert Reinigung und Transport. Wir kümmern uns um den sicheren Transport Ihrer Möbel und die Reinigung Ihrer alten und neuen Wohnung',
        avg_min_time: 2,
        avg_max_time: 4,
        avg_min_price: 500,
        avg_max_price: 700,
        image_name: 'complex.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_GYPSUM_WALL,
        title: 'Gipswand-Reparatur',
        serviceType: REPAIR,
        description: 'Wir reparieren Gipskartonwände fachgerecht und präzise, beseitigen Risse, Löcher und andere Schäden, sodass die gesamte Oberfläche wieder glatt, stabil und einwandfrei wird',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'gipskartonwanden.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_EXTERIOR_PAINTING,
        title: 'Außenanstrich',
        serviceType: REPAIR,
        description: 'Wir führen professionelle Außenanstriche durch, die Ihre Fassade vor Witterungseinflüssen schützen und ihr ein frisches, gepflegtes Aussehen verleihen, das sie lange Zeit erhalten bleibt',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'auBenanstrich.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_INTERIOR_PAINTING,
        title: 'Innenanstrich',
        serviceType: REPAIR,
        description: 'Wir bieten professionelle Innenanstriche an, die Ihre Räume auffrischen und mit hochwertigen Farben ein sauberes, modernes und einladendes Ambiente erzeugen, das lange hält',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'innenanstrich.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_RESTORATION,
        title: 'Restaurierung',
        serviceType: REPAIR,
        description: 'Wir bieten professionelle Restaurierung und Instandsetzung von beschädigten Oberflächen und Möbeln, um ihnen ihr ursprüngliches Aussehen und ihre Funktionalität zurückzugeben',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'restaurierung.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_FLOOR,
        title: 'Bodenreparatur',
        serviceType: REPAIR,
        description: 'Wir reparieren beschädigte Böden, beseitigen Unebenheiten und sorgen für eine gleichmäßige, stabile Oberfläche, die sowohl langlebig, funktional als auch optisch ansprechend ist',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'bodenreparatur.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_PLUMBING,
        title: 'Klempnerarbeiten Reparatur',
        serviceType: REPAIR,
        description: 'Wir reparieren Ihr Wasserleitungs- und Sanitärsystem, beheben Lecks, Störungen und Defekte und stellen sicher, dass alles wieder einwandfrei und zuverlässig funktioniert',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'klempnerarbeiten-reparatur.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_TILE_LAYING,
        title: 'Fliesenverlegung',
        serviceType: REPAIR,
        description: 'Wir verlegen Fliesen präzise und fachgerecht, sorgen für eine gleichmäßige Oberfläche und ein ästhetisches Ergebnis in Ihrem Badezimmer, Küche oder anderen Räumen',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'fliesenverlegung.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_TILE_REPLACEMENT,
        title: 'Austausch von Fliesen',
        serviceType: REPAIR,
        description: 'Wir ersetzen beschädigte Fliesen schnell und professionell, sorgen für eine nahtlose Integration und stellen sicher, dass das Ergebnis optisch und funktional perfekt ist',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'austausch-von-fliesen.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_BRICKWORK,
        title: 'Mauerarbeiten',
        serviceType: REPAIR,
        description: 'Wir bieten professionelle Ausführung von Mauerarbeiten, erstellen stabile und langlebige Wände aus Ziegeln und sorgen für eine präzise und saubere Ausführung jedes Projekts',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'mauerarbeiten.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_RENOVATION,
        title: 'Renovationen',
        serviceType: REPAIR,
        description: 'Wir bieten umfassende Reparaturleistungen, um Ihr Zuhause schnell, effektiv und zuverlässig in einen einwandfreien und funktionalen Zustand zu bringen',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'renovationen.svg'
      },
      {
        type: ServicesOptionsEnum.REPAIR_REMODELING,
        title: 'Umbauten',
        serviceType: REPAIR,
        description: 'Wir übernehmen Umbauten, um Ihre Räume nach Ihren Vorstellungen zu gestalten, sei es durch Umstrukturierungen, Erweiterungen oder Anpassung von Wohn- und Arbeitsbereichen',
        avg_min_time: 4,
        avg_max_time: 5,
        avg_min_price: 555,
        avg_max_price: 750,
        image_name: 'umbauten.svg'
      }
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
          avg_max_price: option.avg_max_price,
          image_name: option.image_name
        });

        await this.serviceOptionRepository.save(serviceOption);
      }
    }
  }
}
