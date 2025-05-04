import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';

@Entity()
export class ClientRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone_number: string;

  @OneToOne(() => ServiceOption, (option) => option.clientRequest, { nullable: true })
  @JoinColumn()
  option: ServiceOption;
}
