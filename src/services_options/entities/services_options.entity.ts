import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServicesOptionsEnum } from "../enum/services_options.enum";
import { Service } from "src/services/entities/services.entity";
import { ServiceOptionItemAmountPrice } from "src/services_option_item_amount_price/entities/services_option_item_amount_price";

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

  @ManyToOne(() => Service, service => service.options)
  service: Service;

  @OneToMany(() => ServiceOptionItemAmountPrice, (serviceOptionItemAmountPrice) => serviceOptionItemAmountPrice.serviceOption)
  serviceOptionItemAmountPrices: ServiceOptionItemAmountPrice[];
}
