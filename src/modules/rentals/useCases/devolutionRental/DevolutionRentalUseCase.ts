import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IResquest {
    id: string;
    user_id: string;
}

@injectable()
class DevolutionRentalUseCase {

    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalsRepository,

        @inject("CarsRepository")
        private carsRepository: ICarsRepository,

        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) { }

    async execute({ id, user_id }: IResquest): Promise<Rental> {
        const rental = await this.rentalsRepository.findById(id);
        const car = await this.carsRepository.findById(rental.car_id);
        const minimun_daily = 1;

        if (!rental) {
            throw new AppError("Rental does not exists!");
        }

        //Verify time limit
        const dateNow = this.dateProvider.dateNow();

        //Verificar quantidade de Diaria
        let daily = this.dateProvider.compareInDays( // VERIFICAR 
            rental.start_date,
            this.dateProvider.dateNow()
        ); 
        if (daily <= 0) {
            daily = minimun_daily; 
        }

        //Quantidade de dias em atraso
        const delay = this.dateProvider.compareInDays(dateNow, rental.expected_return_date);

        //Calculo
        let total = 0;
        if (delay > 0) {
            const calculate_fine = delay * car.fine_amount;
            total = calculate_fine;
        }

        // Total + (daily * car.daily_rate) // car.daily_rate: Valor da diaria
        total += daily * car.daily_rate;

        //Atualiza end_date e total da tabela rental
        rental.end_date = this.dateProvider.dateNow();
        rental.total = total;

        await this.rentalsRepository.create(rental); // Atualizar Rental
        await this.carsRepository.updateAvailable(car.id, true); // Atualizr carro

        return rental;
    };
}

export { DevolutionRentalUseCase };