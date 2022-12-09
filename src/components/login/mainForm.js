import React, { useState, useEffect, useRef } from 'react';
import MainFormContainer from './mainFormContainer';
import LogInForm from './logInForm'
import SignInForm from './signInForm'
import '../login/login.css'

export default function MainForm({ setUser, setIsAuth}) {
    const [formActive, setFormActive] = useState(null);

    return (
        <section className='mainForm'>
            {!formActive && 
            <MainFormContainer
            setUser={setUser}
            setIsAuth={setIsAuth}
            setFormActive={setFormActive}
            />}
            {(formActive === 'login') ?
                <LogInForm
                    setFormActive={setFormActive}
                    setIsAuth={setIsAuth}
                    setUser={setUser}
                />
                : (formActive === 'signin') ?
                    <SignInForm
                        setFormActive={setFormActive}
                        setIsAuth={setIsAuth}
                        setUser={setUser}
                    />
                    : ''}
        </section>
    )
}