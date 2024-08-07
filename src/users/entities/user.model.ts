import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Name of the database table
export class User {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true }) // Unique username
  username: string;

  @Column({ type: 'varchar', length: 255 }) // Password field
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true }) // Optional email
  email?: string;

  @Column({ type: 'boolean', default: true }) // Boolean field for active status
  isActive: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Timestamp for record creation
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true }) // Optional timestamp for record update
  updatedAt?: Date;
}
