import { useContext } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../context";
import { customAxios } from "../../utils";

export const deleteCompany = () => {

    const { token } = useContext(AuthContext);
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (id: string) => customAxios.delete(`/companies/delete/by-id`, {
            data: JSON.stringify(id),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['companies'] })
            toast.success('Company Deleted!')
        },
        onError: (error:Error) => {
            toast.error(error.message)
        }
    })

    return mutation
}