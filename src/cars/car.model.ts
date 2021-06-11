import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => String)
  id: string;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  model?: string;

  @Field({ nullable: true })
  year?: string;

  @Field(() => Int)
  km: number;
}
