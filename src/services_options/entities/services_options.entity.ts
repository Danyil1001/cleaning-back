import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServicesOptionsEnum } from "../enum/services_options.enum";
import { Service } from "src/services/entities/services.entity";

@Entity()
export class ServiceOption{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ServicesOptionsEnum,
  })
  type: ServicesOptionsEnum;

  @ManyToOne(() => Service, service => service.options)
  service: Service;
}
