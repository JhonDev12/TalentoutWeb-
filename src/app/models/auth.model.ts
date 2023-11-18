import { ActivationCompanyUserModel } from './activation-company-user.model';
import { PersonaModel } from './persona.model';


export interface AuthModel {
  user: PersonaModel;
  permission: string;
  userActivate: ActivationCompanyUserModel;
}
