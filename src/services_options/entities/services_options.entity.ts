import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServicesOptionsEnum } from "../enum/services_options.enum";
import { Service } from "src/services/entities/services.entity";
import { ServiceOptionItemAmountPrice } from "src/services_option_item_amount_price/entities/services_option_item_amount_price";
import { ClientRequest } from "src/client-requests/entities/client-requests.entity";
@Entity()
export class ServiceOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ServicesOptionsEnum,
  })
  type: ServicesOptionsEnum;

  @Column({
    type: String,
    nullable: true
  })
  title: string;

  @Column({
    type: String,
    nullable: true
  })
  description: string;

  @Column({
    type: String,
    nullable: true
  })
  image_name: string;

  @Column({
    type: Number,
    nullable: true
  })
  avg_min_time: number;

  @Column({
    type: Number,
    nullable: true
  })
  avg_max_time: number;

  @Column({
    type: Number,
    nullable: true
  })
  avg_min_price: number;

  @Column({
    type: Number,
    nullable: true
  })
  avg_max_price: number;

  @ManyToOne(() => Service, service => service.options)
  service: Service;

  @OneToMany(() => ClientRequest, (clientRequest) => clientRequest.option)
  clientRequests: ClientRequest[];

  @OneToMany(() => ServiceOptionItemAmountPrice, (serviceOptionItemAmountPrice) => serviceOptionItemAmountPrice.serviceOption)
  serviceOptionItemAmountPrices: ServiceOptionItemAmountPrice[];
}
