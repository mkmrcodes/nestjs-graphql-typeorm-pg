import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ArgsType()
export class GetCarsArgs {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString()
  public id?: string;
}
