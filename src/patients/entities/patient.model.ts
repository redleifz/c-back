import { IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column('date', { nullable: true }) // Making birth_date nullable
  birth_date: Date | null;

  @Column({
    unique: true,
  })
  citizen_id: string;

  @Column({
    nullable: true,
  })
  status: string | null;
}
