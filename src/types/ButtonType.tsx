import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
    icon?: ReactNode,
    iconPostion?: "left" | "right",
    title?: string | any,
    extrClass?: string,
    type: "submit" | "button",
    onClick?: MouseEventHandler<HTMLButtonElement>,
    isLoading?: boolean,
    loading?: ReactNode
}