import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("specification")
class Specification {

    @PrimaryColumn()
    id?: string; //Opcional

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at:  Date;

     // Metodo que é chamado quando a classe pe instanciada
     constructor() {
         if (!this.id) { //Se não tiver nenhum id vindo 
            this.id = uuidV4();
         }
     }
};

export { Specification };