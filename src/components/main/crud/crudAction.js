import "./crudAction.css";
import { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Interrogation from "../../../assets/interrogation.jpg";

import { getBooks } from "../../../services/getBooks";
import { handleSendForm } from "../../../helpers/handleSendForm";
import { getBook } from "../../../services/getBook";
import ModalMsg from '../../shared/modalMsg';

export default function CrudAction({ crudAction, setCrudAction }) {
    const [imgPrev, setImgPrev] = useState(null);
    const [listBooks, setListBooks] = useState(null);
    const [inputId, setInputId] = useState(null);
    const [showModalMsg, setShowModalMsg] = useState(false);
    const [msgModal, setMsgModal] = useState('Undefined');

    useEffect(() => {
        if (!imgPrev) return;
        document.getElementById("imgPrev").src = imgPrev;
    }, [imgPrev]);

    useEffect(() => {
        getBooks().then((e) => setListBooks(e));
    }, []);

    const cleanInputs = () => {
        document.getElementById("imgPrev").src = Interrogation;
        document.getElementById("img").value = "";
        document.getElementById("title").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("description").value = "";
    };

    const sendData = (method) => {
        let img = document.getElementById("img").value,
            title = document.getElementById("title").value,
            autor = document.getElementById("autor").value,
            gender = document.getElementById("gender").value,
            description = document.getElementById("description").value;

        if (method == "POST") {
            handleSendForm(1, { title, autor, gender, description, img })
                .then(e => {
                    if (e) {
                        setMsgModal('Book Created!!')
                        setShowModalMsg(true);
                    } else {
                        setMsgModal('Book Not Created!! There was an error');
                        setShowModalMsg(true);
                    }
                });

        }
        if (method == "PUT") {
            console.log("UPDATING BOOK");
            handleSendForm(2, { title, autor, gender, description, img }, inputId)
                .then(e => {
                    if (e) {
                        setMsgModal('Book Updated!!')
                        setShowModalMsg(true);
                    } else {
                        setMsgModal('Book Not Updated!! There was an error');
                        setShowModalMsg(true);
                    }
                })
        }
        if (method == "DELETE") {
            if (window.confirm('Are you shure delete book N° ' + inputId)) {
                handleSendForm(3, undefined, inputId)
                    .then(e => {
                        if (e) {
                            setMsgModal('Book Deleted!!')
                            setShowModalMsg(true);
                        } else {
                            setMsgModal('Book Not Deleted!! There was an error');
                            setShowModalMsg(true);
                        }
                    })
            }
        }

        cleanInputs();
    };

    const consultBook = () => {
        if (inputId) {

            document.getElementById("imgPrev").disabled = false;
            document.getElementById("img").disabled = false;
            document.getElementById("title").disabled = false;
            document.getElementById("autor").disabled = false;
            document.getElementById("gender").disabled = false;
            document.getElementById("description").disabled = false;

            getBook(inputId)
                .then((e) => {
                    setDataInputs(e);
                })
                .catch((e) => window.alert(`Libro con id:${inputId} no encontrado`));

            cleanInputs();
            document.getElementById("id").value = "";
        }
    };

    const validateInputs = () => { };

    const setDataInputs = (e) => {
        document.getElementById("imgPrev").src = e.img;
        document.getElementById("img").value = e.img;
        document.getElementById("title").value = e.title;
        document.getElementById("autor").value = e.autor;
        document.getElementById("gender").value = e.gender;
        document.getElementById("description").value = e.description;
    };

    const returnSection = () => {
        switch (crudAction) {
            case 1:
                return (
                    <>
                        <div className="img">
                            <img src={Interrogation} id="imgPrev"></img>
                        </div>
                        <ul className="ul-inputs">
                            <li className="li-input">
                                <input
                                    required={true}
                                    type="text"
                                    name="image"
                                    placeholder="url"
                                    id="img"
                                    onChange={(e) => setImgPrev(e.target.value)}
                                ></input>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="title"
                                ></input>
                                <label>Title</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="autor"
                                ></input>
                                <label>Autor</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="gender"
                                ></input>
                                <label>Género</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="description"
                                ></input>
                                <label>Descripción</label>
                            </li>
                            <li className="">
                                <button
                                    type="submit"
                                    className="button-send"
                                    onClick={() => sendData("POST")}
                                >
                                    Crear
                                </button>
                            </li>
                        </ul>
                    </>
                );
            case 2:
                return (
                    <>
                        <ul className="ul-books">
                            <li className="li-book">
                                <div>
                                    <span>Id</span>
                                </div>
                                <div>
                                    <span>Title</span>
                                </div>
                                <div>
                                    <span>Autor</span>
                                </div>
                                <div>
                                    <span>Gender</span>
                                </div>
                                <div>
                                    <span>Description</span>
                                </div>
                            </li>
                            {listBooks &&
                                listBooks.map((e) => (
                                    <li className="li-book" key={e.id}>
                                        <div>
                                            <span>{e.id}</span>
                                        </div>
                                        <div>
                                            <span>{e.title}</span>
                                        </div>
                                        <div>
                                            <span>{e.autor}</span>
                                        </div>
                                        <div>
                                            <span>{e.gender}</span>
                                        </div>
                                        <div>
                                            <span>{e.description}</span>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="img">
                            <img src={Interrogation} id="imgPrev"></img>
                        </div>
                        <ul className="ul-inputs">
                            <li className="li-input">
                                <input
                                    required={true}
                                    type="text"
                                    name="image"
                                    placeholder="url"
                                    id="img"
                                    onChange={(e) => setImgPrev(e.target.value)}
                                    disabled
                                ></input>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="number"
                                    id="id"
                                    onChange={(e) => setInputId(e.target.value)}
                                ></input>
                                <label>Id</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="title"
                                    disabled
                                ></input>
                                <label>Title</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="autor"
                                    disabled
                                ></input>
                                <label>Autor</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="gender"
                                    disabled
                                ></input>
                                <label>Género</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="description"
                                    disabled
                                ></input>
                                <label>Descripción</label>
                            </li>
                            <li className="buttons">
                                <button
                                    type="submit"
                                    className="button-send"
                                    onClick={() => consultBook()}
                                >
                                    Consultar
                                </button>
                                <button
                                    type="submit"
                                    className="button-send"
                                    onClick={() => sendData("PUT")}
                                >
                                    Actualizar
                                </button>
                            </li>
                        </ul>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="img">
                            <img src={Interrogation} id="imgPrev"></img>
                        </div>
                        {/* <div className="file">
                            <input
                                required={true}
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleSelected}
                                id="file"
                                disabled
                            ></input>
                            <label htmlFor="file">Select an image</label>
                            <span>or into a Url img</span>
                        </div> */}
                        <input
                            required={true}
                            type="text"
                            name="image"
                            placeholder="url"
                            id="img"
                            onChange={(e) => setImgPrev(e.target.value)}
                            disabled
                            hidden
                        ></input>
                        <ul className="ul-inputs">
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="number"
                                    id="id"
                                    onChange={(e) => setInputId(e.target.value)}
                                ></input>
                                <label>Id</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="title"
                                // disabled
                                ></input>
                                <label>Title</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="autor"
                                // disabled
                                ></input>
                                <label>Autor</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="gender"
                                // disabled
                                ></input>
                                <label>Género</label>
                            </li>
                            <li className="li-input">
                                <input
                                    required={true}
                                    autoComplete="off"
                                    type="text"
                                    id="description"
                                // disabled
                                ></input>
                                <label>Descripción</label>
                            </li>
                            <li className="buttons">
                                <button
                                    type="submit"
                                    className="button-send"
                                    onClick={() => consultBook(true)}
                                >
                                    Consultar
                                </button>
                                <button
                                    type="submit"
                                    className="button-send"
                                    onClick={() => sendData("DELETE")}
                                >
                                    Eliminar
                                </button>
                            </li>
                        </ul>
                    </>
                );
        }
    };

    return (
        <>
            {showModalMsg && <ModalMsg msg={msgModal} setShowModalMsg={setShowModalMsg} />}
            <div className="crud-action">
                <IoMdArrowBack className="icon" onClick={() => setCrudAction(null)} />
                {returnSection()}
            </div>
        </>
    );
}
