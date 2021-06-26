import { Specification } from "../infra/typeorm/entities/Specification";
''
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>; // retorno de um array
    create({ name, description }: ICreateSpecificationDTO): Promise<Specification>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };