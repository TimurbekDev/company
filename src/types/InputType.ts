import { ChangeEventHandler, FocusEventHandler } from "react";

export interface InputType {
    type: "text" | "login" | "password" | 'number',
    placeholder: string,
    label : string,
    labelClassName?:string,
    extraClass?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    name?: string,
    value?: string,
}