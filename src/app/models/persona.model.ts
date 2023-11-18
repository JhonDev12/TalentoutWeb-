import { AsignacionRolPersonaModel } from './asignacion-rol-persona.model';



export interface PersonaModel {
    id?: number;

    identificacion: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    fechaNac?: Date;
    direccion?: string;
    email?: string;
    telefonoFijo?: string;
    celular?: string;
    rutaFotoUrl?: any;
    perfil?: string;

    idciudadNac?: number;
    idciudad?: number;
    idtipoIdentificacion?: number;
    idciudadUbicacion?: number;






    asignacionRolPersona?: AsignacionRolPersonaModel;

}
