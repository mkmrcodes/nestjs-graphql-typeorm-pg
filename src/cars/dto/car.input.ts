import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString, MaxLength } from 'class-validator';

@InputType()
export class CarInput {
  @Field()
  @IsString()
  @MaxLength(100)
  readonly brand: string;

  @Field()
  @IsString()
  @MaxLength(100)
  readonly model: string;

  @Field(() => Int)
  @IsInt()
  readonly year: number;

  @Field(() => Int)
  @IsInt()
  readonly km: number;
}
