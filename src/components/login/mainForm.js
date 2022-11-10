import React, { useState, useEffect, useRef } from 'react';
import LogInForm from './logInForm'
import SignInForm from './signInForm'
import '../login/login.css'

import MainFormContainer from './mainFormContainer';

export default function MainForm({ setIsAuth}) {
    const [formActive, setFormActive] = useState(null);
    // const refMainForm = useRef()

    // useEffect(() => {
    //     if (formActive) {
    //         if (formActive === 'main') refMainForm.current.classList.toggle('move-form-up');
    //         if (formActive === 'signin' || formActive === 'login') refMainForm.current.classList.toggle('move-form-up');
    //     }
    // }, [formActive]);

    return (
        <section className='mainForm'>
            {!formActive && 
            <MainFormContainer
            setFormActive={setFormActive}
            />}
            {(formActive === 'login') ?
                <LogInForm
                    setFormActive={setFormActive}
                    setIsAuth={setIsAuth}
                />
                : (formActive === 'signin') ?
                    <SignInForm
                        setFormActive={setFormActive}
                    />
                    : ''}
        </section>
    )
}