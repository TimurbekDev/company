import React, { useContext } from "react";
import { Button, Input } from "../components";
import { Link } from "react-router";
import { login } from "../services";
import { ILogin } from "../types";
import { AuthContext } from "../context";

const Login: React.FC = () => {

    const { setToken } = useContext(AuthContext);

    const formSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const data: ILogin = {
            login: (e.target as HTMLFormElement).login.value,
            password: (e.target as HTMLFormElement).password.value
        };

        login(data, setToken);
    }

    return (
        <div className="w-full h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-sm sm:max-w-md lg:max-w-lg w-full">
                <form className="flex flex-col gap-5" onSubmit={formSubmit}>
                    <h2 className="text-4xl font-semibold text-center mb-6">Вход</h2>
                    <Input labelClassName="flex flex-col gap-1" name="login" label="Логин" type="login" placeholder="Введите логин" />
                    <Input extraClass="my-1" name="password" label="Пароль" type="password" placeholder="Введите пароль" />
                    <Link to="/register" className="text-blue-700 text-[18px] font-semibold self-start">
                        Регистрация
                    </Link>
                    <div className="w-full flex justify-center border-t-[1px] pt-3 border-slate-500">
                        <Button extrClass="w-[100px] bg-green-500" type="submit" title="Вход" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
