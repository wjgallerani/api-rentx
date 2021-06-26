import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { getRepository, Repository } from "typeorm";
import { CarImage } from "../entities/CarImage";


class CarsImagesRepository implements ICarsImagesRepository {

    private repostory: Repository<CarImage>;

    constructor() {
        this.repostory = getRepository(CarImage);
    }

    async create(car_id: string, image_name: string): Promise<CarImage> {
        const carImage = this.repostory.create({
            car_id,
            image_name
        })

        await this.repostory.save(carImage);

        return carImage;
    }

}

export { CarsImagesRepository }