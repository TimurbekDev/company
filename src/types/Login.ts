import { IRegister } from "./Register";

export interface ILogin extends Omit<IRegister, 'fullName'> { }