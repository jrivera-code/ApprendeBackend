import {Entity,Column,Table,OneToMany,ManyToOne,JoinColumn, PrimaryGeneratedColumn} from "typeorm";
import {AlumnoUsuario,Alumno,DocenteCurso} from "./Index";
@Entity()
@Table("Curso")
export class Curso {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column("string",{length : 45})
    Grado: string;

    @Column("string",{length : 1})
    Letra: string;

    @OneToMany( type=> DocenteCurso, docenteCurso => docenteCurso.Curso)
    DocenteCurso:DocenteCurso[];

    @OneToMany(type=>Alumno , alumno => alumno.Curso)
    Alumnos:Alumno[];
}