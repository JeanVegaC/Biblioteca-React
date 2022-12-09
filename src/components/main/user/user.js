import React, { useState, useEffect } from "react";
import { AiFillTool, AiFillSave } from "react-icons/ai";
import "../user/user.css";
import imgAdmin from "../../../assets/admin.png";
import imgEmployee from "../../../assets/employee.png";
import imgGuest from "../../../assets/guest.jpg";
import ModalMsg from '../../shared/modalMsg';
import { putUser } from "../../../services/putUser";
import { getUser } from "../../../services/getUser";

export default function User({ user, setUser }) {
    const [showBtnSave, setShowBtnSave] = useState(false);
    const [validatePassword, setValidatePassword] = useState(false);
    const [showModalMsg, setShowModalMsg] = useState(false);
    const [msgModal, setMsgModal] = useState('Undefined');

    const userId = user.id,
        userName = user.userName;

    useEffect(() => {
        if (user) {
            setValueInputs(user);
        }
    }, []);

    const imgUser = (rol) => {
        switch (rol) {
            case "admin":
                return <img src={imgAdmin}></img>;
            case "employee":
                return <img src={imgEmployee}></img>;
            case "guest":
                return <img src={imgGuest}></img>;
        }
    };

    const setValueInputs = (e) => {
        document.getElementById("name").value = e.name;
        document.getElementById("lastName").value = e.lastName;
        document.getElementById("rol").value = e.rol;
        setValidatePassword(false);
    };

    const handleBtnUpdate = () => {
        if (user.rol == "guest") {
            setMsgModal('You are an guest, cant update this data!!');
            setShowModalMsg(true);
        } else {
            document.getElementById("name").disabled = false;
            document.getElementById("lastName").disabled = false;
        }
    };

    const validateDiferences = () => {
        if (
            document.getElementById("name").value != user.name ||
            document.getElementById("lastName").value != user.lastName
        ) {
            setShowBtnSave(true);
        } else {
            setShowBtnSave(false);
        }
    };

    const handleSave = async () => {
        if (!handleChangePassword()) {
            setMsgModal("Password Incorrect!!");
            setShowModalMsg(true);
            return
        }

        const name = document.getElementById("name").value,
            lastName = document.getElementById("lastName").value,
            rol = document.getElementById("rol").value;
        let password = user.password;

        if(validatePassword) password = document.getElementById("password").value;

        await putUser({ userName, password, rol, name, lastName }, userId);

        document.getElementById("name").disabled = true;
        document.getElementById("lastName").disabled = true;

        await updateUser();

        setMsgModal('Data saved!!')
        setShowModalMsg(true);
    };

    const handleChangePassword = () => {
        if(validatePassword){
            return user.password == document.getElementById("recentPassword").value;
        }
    };

    const updateUser = () => {
        getUser(user.id).then((e) => {
            setUser(e);
            setValueInputs(e);
        });
    };
    
    return (
        <>
        {showModalMsg && <ModalMsg msg={msgModal} setShowModalMsg={setShowModalMsg}></ModalMsg>}
        <div className="user expand-section">
            <header className="options">
                <div className="update" onClick={handleBtnUpdate}>
                    <AiFillTool className="icon" />
                    <span>Editar</span>
                </div>
                {showBtnSave && (
                    <div className="save" onClick={handleSave}>
                        <AiFillSave className="icon" />
                        <span>Guardar</span>
                    </div>
                )}
            </header>
            <div className="img">{imgUser(user.rol)}</div>
            <ul className="ul-data">
                <li className="li-data">
                    <span>Nombre</span>
                    <input
                        type="text"
                        id="name"
                        onChange={validateDiferences}
                        disabled
                    ></input>
                </li>
                <li className="li-data">
                    <span>Apellido</span>
                    <input
                        type="text"
                        id="lastName"
                        onChange={validateDiferences}
                        disabled
                    ></input>
                </li>
                <li className="li-data">
                    <span>Rol</span>
                    <input
                        type="text"
                        id="rol"
                        onChange={validateDiferences}
                        disabled
                    ></input>
                </li>
                {validatePassword && (
                    <>
                        <li className="li-data">
                            <span>Recent Password</span>
                            <input
                                type="password"
                                id="recentPassword"
                                onChange={() => setShowBtnSave(true)}
                            ></input>
                        </li>
                        <li className="li-data">
                            <span>New Password</span>
                            <input
                                type="password"
                                id="password"
                                onChange={() => setShowBtnSave(true)}
                            ></input>
                        </li>
                    </>
                )}
                {!validatePassword && (
                    <li className="li-button">
                        <input
                            type="button"
                            id="password"
                            value="Change Password"
                            onClick={() => {
                                if (user.rol == "guest") {
                                    setMsgModal('You cant update password');
                                    setShowModalMsg(true);
                                } else {
                                    setValidatePassword(true);
                                }
                            }}
                        ></input>
                    </li>
                )}
            </ul>
        </div>
        </>
    );
}
