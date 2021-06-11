import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CarInput } from './dto/car.input';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly CarRepository: Repository<Car>,
  ) {}

  async getCars() {
    return await this.CarRepository.find();
  }

  async getCarById(id: string): Promise<Car> {
    const found = await this.CarRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Car with id:${id} not found`);
    }
    return found;
  }
  async getCarsByBrand(brand: string): Promise<Car[]> {
    const found = await this.CarRepository.find({ where: { brand: brand } });
    if (!found) {
      throw new NotFoundException(`Car with brand:${brand} not found`);
    }
    return found;
  }
  async createCar(data: CarInput): Promise<Car> {
    const car = new Car();
    const { brand, model, year, km } = data;

    car.brand = brand;
    car.model = model;
    car.year = year;
    car.km = km;

    await this.CarRepository.save(car);
    return car;
  }
  async deleteCar(id: string): Promise<boolean> {
    const deleteResult = await this.CarRepository.delete(id);
    return !!(deleteResult.affected && deleteResult.affected > 0);
  }
}
