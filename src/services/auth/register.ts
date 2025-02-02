import { IRegister } from "../../types";
import toast from "react-hot-toast";
import { customAxios } from "../../utils";

export const register = (
    data: IRegister,
) => customAxios
    .post('/auths/sign-up', data)
    .then(_ => {
        toast.success('You are successfully registered \nPlease Log In')
    }).catch(e => {
        toast.error(e.response?.data || 'Something went wrong')
    })