
import { RolModel } from "./rol.model";

export interface ActivationCompanyUserModel {
  id?: number;
  user_id: number;
  state_id: number;
  company_id: number;
  fechaInicio: string;
  fechaFin: string;
  created_at?: string;
  updated_at?: string;
  company?: string;
  roles: RolModel[];
}
