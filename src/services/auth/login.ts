import { ILogin } from "../../types";
import React, { SetStateAction } from "react";
import toast from "react-hot-toast";
import { customAxios } from "../../utils";

export const login = (
    data: ILogin,
    setToken: React.Dispatch<SetStateAction<string | null>>
) => customAxios
    .post('/auths/sign-in', data)
    .then(res => {        
        setToken(res.data);
    }).catch(e => {
        toast.error(e.response?.data || 'Something went wrong')
    })