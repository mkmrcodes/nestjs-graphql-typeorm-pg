import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreateCarDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  @IsNotEmpty()
  readonly brand: string;

  @Field()
  @IsNotEmpty()
  readonly model: string;

  @Field(() => Int)
  @IsNotEmpty()
  readonly year: number;

  @Field(() => Int)
  @IsNotEmpty()
  readonly km: number;
}
