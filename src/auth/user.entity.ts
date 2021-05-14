import {
  Column,
  PrimaryGeneratedColumn,
  Unique,
  Entity,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Task } from 'src/task/task.entity';

@Unique(['username'])
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
