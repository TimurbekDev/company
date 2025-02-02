import { useContext } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IUpdateCompany } from "../../types";
import { customAxios } from "../../utils";
import { AuthContext } from "../../context";

export const updateCompany = () => {

    const { token } = useContext(AuthContext);
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (data: IUpdateCompany) => customAxios.put(`/companies/update`, data, {
            headers: { Authorization: `Bearer ${token}` }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['companies'] })
            toast.success('Company Updated!')
        },
        onError: (error:Error) => {
            toast.error(error.message)
        }
    })

    return mutation
}