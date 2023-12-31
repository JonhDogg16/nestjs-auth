import { Role } from '../../common/enums/rol.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  documentType: string;

  @Column({ unique: true })
  document: number;

  @Column({ unique: true, nullable: false })
  user: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: 'enum', default: Role.User, enum: Role })
  role: Role;
}
