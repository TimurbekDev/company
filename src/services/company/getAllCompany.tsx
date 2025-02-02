import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ICompany } from '../../types'
import { AuthContext } from '../../context';
import { customAxios } from '../../utils';


export const getAllCompany = () => {

    const { token } = useContext(AuthContext);

    const { data: companies = [] } = useQuery<ICompany[]>({
        queryKey: ['companies'],
        queryFn: () => customAxios.get('/companies/get-all', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.data),
    })

    return companies
}