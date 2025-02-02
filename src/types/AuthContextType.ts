import React, { SetStateAction } from "react";

export interface IAuthContext {
    token: null | string;
    setToken: React.Dispatch<SetStateAction<string | null>>
}