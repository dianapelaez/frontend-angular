import { ParentEntity } from './parentEntity.model';

export class PersonaJuridicaModel extends ParentEntity {
    public razonSocial: string;
    public fundacion: string;
    public cuit: string;
}
