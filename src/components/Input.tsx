import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputType } from '../types'

export const Input: React.FC<InputType> = ({ type, label,labelClassName, placeholder, extraClass, onChange, onBlur, name, value }) => {
    const [showPass, setShowPass] = useState(false)

    return (
        type == "password" ?
            <div>
                <label className='font-semibold text-2xl' htmlFor="">{label}</label>
                <div className='relative'>
                    <input required name={name} onBlur={onBlur} onChange={onChange} value={value} className={`${extraClass} focus:shadow focus:shadow-[#134E9B] duration-300 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[18px] leading-[#EBEFF3]`} type={showPass ? "text" : "password"} placeholder={placeholder} autoComplete='off' />
                    <div onClick={() => setShowPass(!showPass)} className='cursor-pointer flex items-center absolute top-0 bottom-0 my-auto right-2'>
                        {showPass ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                    </div>
                </div>
            </div>
            : <div className={labelClassName}>
                <label className='font-semibold px-1 text-2xl' htmlFor="">{label}</label>
                <input type={type} required value={value} name={name} onBlur={onBlur} onChange={onChange} className={`${extraClass} focus:shadow focus:shadow-[#134E9B] duration-300 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[18px] leading-[#EBEFF3]`} placeholder={placeholder} autoComplete='off' />
            </div>

    )
}