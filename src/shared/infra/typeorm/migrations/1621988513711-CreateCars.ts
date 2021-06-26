import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1621988513711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "daily_rate",
                        type: "numeric"
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "license_plate",
                        type: "varchar"
                    },
                    {
                        name: "fine_amount",
                        type: "numeric"
                    },
                    {
                        name: "brand",
                        type: "varchar"
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    { 
                        name: "FKCategoryCar", //Nome da ForeingKey
                        referencedTableName: "categories", // Tabela Pai
                        referencedColumnNames: ["id"], // Coluna da tabela Pai
                        columnNames: ["category_id"],  // Coluna da tabela Cars
                        onDelete: "SET NULL", // Quando a tabela pai sofrer alguma alteração, se for uma deleção.
                        onUpdate: "SET NULL"  // Se for um update
                    }
                ]

            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
