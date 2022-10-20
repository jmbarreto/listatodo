import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ({name : "tb_listas"})
export class Lista{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    task : string
}
