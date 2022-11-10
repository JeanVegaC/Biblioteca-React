import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import {IoMdArrowBack} from 'react-icons/io'
import Libro from '../../assets/book.png'
export default function SignInForm({setFormActive}) {
    
    return (
        <form className='signin'>
            <header>
                <IoMdArrowBack className='icon' onClick={()=> setFormActive(false)}/>
                <h1>CREATE ACCOUNT</h1>
            </header>
            <div className='logo'>
                <img src={Libro}></img>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <AiOutlineMail className='icon' />
                    <input name='usser' placeholder='Usser' type="text"></input>
                </div>
                <div className='input'>
                    <AiFillLock className='icon' />
                    <input name='password' placeholder='Password' type="password" autoComplete='on'></input>
                </div>
                <a>Terms & Conditions</a>
            </div>
            <div className='button'>GO!</div>
        </form>
    )
}