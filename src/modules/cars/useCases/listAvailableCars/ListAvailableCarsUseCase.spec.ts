import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);

    });


    it("shoud be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "Onix 3",
            description: "Onix 3",
            daily_rate: 110,
            license_plate: "AB-1234",
            fine_amount: 10,
            brand: "GM",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Onix 4",
            description: "Onix 4",
            daily_rate: 110,
            license_plate: "AB-1234",
            fine_amount: 10,
            brand: "GM",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_brand_test",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Onix 5",
            description: "Onix 5",
            daily_rate: 110,
            license_plate: "AB-1235",
            fine_amount: 10,
            brand: "GM",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Onix 5",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Onix 5",
            description: "Onix 5",
            daily_rate: 110,
            license_plate: "AB-1235",
            fine_amount: 10,
            brand: "GM",
            category_id: "1234",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "1234",
        });

        expect(cars).toEqual([car]);
    });


});