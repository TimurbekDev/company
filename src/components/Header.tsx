import { LogoutOutlined } from "@ant-design/icons"
import { Button } from "./Button"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuhtContext"
import { Modal } from "antd"
import { Input } from "./Input"
import { IAddCompany } from "../types"
import { addCompany } from "../services"

export const Header = () => {

    const { setToken } = useContext(AuthContext);

    const [modal, setModal] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [count, setCount] = useState<any>(null);

    const addMutation = addCompany();

    const handleAddModal = () => {
        const data:IAddCompany = {
            name : name as string,
            count : count as number
        }

        addMutation.mutate(data);
        setCount(null)
        setName('')
        setModal(false)
    }

    const handleLogout = () =>{
        setToken(null);
        localStorage.removeItem('token');
    };

    return <div className="w-full bg-[#313131] h-[70px] px-2 py-2 flex justify-between">
        <h2 className="flex h-full items-center px-3 text-white text-xl">Компании</h2>
        <div className="flex gap-3">
            <Button onClick={handleLogout} type='button' extrClass="bg-[#313131] my-1 cursor-pointer hover:bg-slate-400" title={<LogoutOutlined rotate={180} className="!text-white !text-2xl" />} />
            <Button title="Добавить компания" onClick={() => setModal(true)} type='button' extrClass="bg-[#08979C] my-1" />
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={false}
            >
                <div className='pt-10 flex flex-col gap-3'>
                    <h2 className="text-2xl font-bold pb-5">Добавить компания</h2>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <label className='text-xl font-semibold w-[270px]' htmlFor="">Названия компании</label>
                        <Input value={name as string} label='' type='text' onChange={(e) => setName(e.target.value)} placeholder='Введите названия' extraClass='h-[50px]' />
                    </div>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <label className='text-xl font-semibold w-[270px]' htmlFor="">Количество сотрудников</label>
                        <Input label='' type='number' value={count || ''} onChange={(e) => setCount(Number(e.target.value))} placeholder='Введите количество' extraClass='h-[50px]' />
                    </div>
                    <div className="w-full flex justify-center border-t-[1px] border-slate-400 pt-4">
                        <Button title={'Добавить компания'} extrClass="bg-blue-600" type='button' onClick={handleAddModal} />
                    </div>
                </div>
            </Modal>
        </div>
    </div>
}