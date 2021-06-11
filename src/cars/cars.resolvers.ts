import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './car.entity';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { CarInput } from './dto/car.input';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [Car])
  async getCars() {
    return this.carsService.getCars();
  }

  @Query(() => Car)
  async getCarById(@Args('id', { type: () => ID }) id: string): Promise<Car> {
    return await this.carsService.getCarById(id);
  }

  @Query(() => [Car])
  async getCarsByBrand(@Args('brand', { type: () => String }) brand: string) {
    return this.carsService.getCarsByBrand(brand);
  }

  @Mutation(() => CreateCarDto)
  async createCar(@Args('data') data: CarInput) {
    return this.carsService.createCar(data);
  }
  @Mutation(() => Boolean)
  async deleteCar(@Args('id', { type: () => ID }) id: string) {
    return await this.carsService.deleteCar(id);
  }
}
