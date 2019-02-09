import { ParentEntity } from './parentEntity.model';

export class PersonaJuridicaModel extends ParentEntity {
    public razonSocial: string;
    public Fundacion: string;
    public cuit: string;
}
