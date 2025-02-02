import { useContext } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IAddCompany } from "../../types";
import { customAxios } from "../../utils";
import { AuthContext } from "../../context";

export const addCompany = () => {

    const { token } = useContext(AuthContext);
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn : (data:IAddCompany) => customAxios.post(`/companies/add`,data,{
            headers : { Authorization : `Bearer ${token}`}
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['companies'] })
            toast.success('Company Added!')
        },
        onError: (error:Error) => {
            toast.error(error.message)
        }
    })

    return mutation
}