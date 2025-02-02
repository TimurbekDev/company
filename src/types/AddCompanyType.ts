import { ICompany } from "./CompanyType";

export interface IAddCompany extends Omit<ICompany, 'id'> { }