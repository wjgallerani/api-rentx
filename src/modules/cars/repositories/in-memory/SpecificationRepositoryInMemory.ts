import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationRepositoryInMemory implements ISpecificationRepository {
    specification: Specification[] = [];

    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            description,
            name
        });

        this.specification.push(specification);

        return specification;
    }

    async list(): Promise<Specification[]> { // Refatorar
        return null;
    }

    async findByName(name: string): Promise<Specification> {
        return this.specification.find((specification) => specification.name === name);
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specification.filter((specification) => ids.includes(specification.id));

        return allSpecifications;
    }

}

export { SpecificationRepositoryInMemory };