// import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

// export class AlterUserDeleteUserName1621702740224 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropColumn("users", "username");
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.addColumn("user",
//             new TableColumn({
//                 name: "username",
//                 type: "varchar"
//             }));
//     }

// }
