import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { handleLogin } from "./handleLogin";
import User from "../../assets/login.png";
import ModalMsg from '../shared/modalMsg';

export default function LogInForm({ setFormActive, setIsAuth, setUser }) {

    const [showModalMsg, setShowModalMsg] = useState(false);

    const refInputUser = useRef();
    const refInputPass = useRef();

    return (
        <form className="login">
            {showModalMsg && <ModalMsg msg={'Password Wrong!!'} setShowModalMsg={setShowModalMsg}/>}
            <header>
                <IoMdArrowBack className="icon" onClick={() => setFormActive(false)} />
            </header>
            <div className="logo">
                <img src={User}></img>
            </div>
            <div className="inputs">
                <div className="input">
                    <AiOutlineMail className="icon" />
                    <input
                        ref={refInputUser}
                        name="user"
                        placeholder="User"
                        type="text"
                    ></input>
                </div>
                <div className="input">
                    <AiFillLock className="icon" />
                    <input
                        ref={refInputPass}
                        name="password"
                        placeholder="Password"
                        type="password"
                    ></input>
                </div>
                <a>Terms & Conditions</a>
            </div>
            <button
                type="submit"
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    handleLogin(refInputUser, refInputPass, setIsAuth, setUser, setShowModalMsg);
                }}
            >
                GO!
            </button>
            <a>Forgott password?</a>
        </form>
    );
}
