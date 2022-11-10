import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import User from '../../assets/login.png';
import { handleLogin } from './handleLogin';

export default function LogInForm({ setFormActive, setIsAuth }) {
    const refInputUser = useRef()
    const refInputPass = useRef()


    return (
        <form className='login'>
            <header>
                <IoMdArrowBack className='icon' onClick={() => setFormActive(false)} />
            </header>
            <div className='logo'>
                <img src={User}></img>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <AiOutlineMail className='icon' />
                    <input ref={refInputUser} name='usser' placeholder='Usser' type="text"></input>
                </div>
                <div className='input'>
                    <AiFillLock className='icon' />
                    <input ref={refInputPass} name='password' placeholder='Password' type="password" autoComplete='on'></input>
                </div>
                <a>Terms & Conditions</a>
            </div>
            <button type="submit" className='button' onClick={(e) => {e.preventDefault();handleLogin(refInputUser,refInputPass,setIsAuth)}}>GO!</button>
            <a>Forgott password?</a>
        </form>
    )
}