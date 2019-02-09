import { ParentEntity } from './parentEntity.model';

export class PersonaFisicaModel extends ParentEntity {
    public nombre: string;
    public apellido: string;
    public dni: string;
    public cuit: string;
}
