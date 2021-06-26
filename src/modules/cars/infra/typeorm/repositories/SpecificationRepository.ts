import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { getRepository, Repository } from "typeorm";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../../../repositories/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    //private specifications: Specification[];
    private repository: Repository<Specification>;
    //private static INSTANCE : SpecificationRepository;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({ description, name });
        await this.repository.save(specification);

        return specification;
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name }); //Busca pelo name passado
        return specification;
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specification = await this.repository.findByIds(ids);

        return specification;
    }
}

export { SpecificationRepository };