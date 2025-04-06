import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServicesItemTypeEnum } from '../enum/services_item_type.enum';

@Entity()
export class ServiceItemType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ServicesItemTypeEnum,
  })
  type: ServicesItemTypeEnum;

  @OneToMany(() => ServiceOptionItemAmountPrice, price => price.serviceItemType)
  prices: ServiceOptionItemAmountPrice[];
}
