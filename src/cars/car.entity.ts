import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Car extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(() => String)
  @Column({ type: 'varchar', nullable: false })
  brand!: string;

  @Field(() => String)
  @Column({ type: 'varchar', nullable: false })
  model!: string;

  @Field(() => Int)
  @Column({ type: 'int', nullable: false })
  year!: number;

  @Field(() => Int)
  @Column({ type: 'int', nullable: false })
  km!: number;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn()
  updatedAt?: Date;
}
