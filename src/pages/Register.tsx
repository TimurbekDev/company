import React from "react";
import { Button, Input } from "../components";
import { Link, useNavigate } from "react-router";
import { IRegister } from "../types";
import { register } from "../services";

const Register: React.FC = () => {

    const navigate = useNavigate()

    const formSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const data: IRegister = {
            fullName: (e.target as HTMLFormElement).fullName.value,
            login: (e.target as HTMLFormElement).login.value,
            password: (e.target as HTMLFormElement).password.value
        };
        register(data).then(_ => navigate('/'));
    }

    return (
        <div className="w-full h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-sm sm:max-w-md lg:max-w-lg w-full">
                <h2 className="text-4xl font-semibold text-center mb-6">Регистрация</h2>
                <form className="flex flex-col gap-5" onSubmit={formSubmit}>
                    <Input labelClassName="flex flex-col gap-1" name="fullName" label="Ф.И.О" type="text" placeholder="Введите Ф.И.О" />
                    <Input labelClassName="flex flex-col gap-1" name="login" label="Логин" type="text" placeholder="Введите логин" />
                    <Input extraClass="my-1" name="password" label="Пароль" type="password" placeholder="Введите пароль" />
                    <Link to="/" className="text-blue-700 text-[18px] font-semibold self-start">
                        Логин
                    </Link>
                    <div className="w-full flex justify-center border-t-[1px] pt-3 border-slate-500">
                        <Button extrClass="w-[130px] bg-green-500 px-2" type="submit" title="Регистрация" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
