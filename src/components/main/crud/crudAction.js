import "./crudAction.css";
import { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Interrogation from "../../../assets/interrogation.jpg";

import { getBooks } from "../../../services/getBooks";
import { handleSendForm } from "../../../helpers/handleSendForm";
import { getBook } from "../../../services/getBook";

export default function CrudAction({ crudAction, setCrudAction }) {
    const [image, setImage] = useState(null);
    const [imgPrev, setImgPrev] = useState(null);

    const [listBooks, setListBooks] = useState(null);

    const [inputId, setInputId] = useState(null);
    const [inputReady, setInputReady] = useState(false);

    useEffect(() => {
        if (!imgPrev) return;
        document.getElementById("imgPrev").src = imgPrev;
    }, [imgPrev]);

    useEffect(() => {
        getBooks().then((e) => setListBooks(e));
    }, []);

    const returnSection = () => {
        
        const cleanInputs = () => {
            document.getElementById("img").value = "";
            document.getElementById("imgPrev").src = Interrogation;
            document.getElementById("title").value = "";
            document.getElementById("autor").value = "";
            document.getElementById("gener").value = "";
            document.getElementById("description").value = "";
        };

        const sendData = (method) => {
            let img = document.getElementById("img").value,
                title = document.getElementById("title").value,
                autor = document.getElementById("autor").value,
                gener = document.getElementById("gener").value,
                description = document.getElementById("description").value;

            if (method == "POST") {
                console.log("CREATING BOOK");
                handleSendForm(1, { img, title, autor, gener, description });
            }
            if (method == "PUT") {
                console.log("UPDATING BOOK");
                handleSendForm(2, { img, title, autor, gener, description }, inputId);
                setInputReady(false);
            }
            if (method == "DELETE") {
                console.log("DELETING BOOK");
                handleSendForm(3, undefined, inputId);
                setInputReady(false);
            }

            cleanInputs();
        };

        const handleSelected = (e) => {
            setImage(e.target.files[0]);
        };

        const consultBook = (inputValue) => {
            if (inputId) {
                getBook(inputId)
                    .then((e) => {
                        setInputReady(true);
                        setDataInputs(e);

                        document.getElementById("img").disabled = inputValue;
                        document.getElementById("imgPrev").disabled = inputValue;
                        document.getElementById("title").disabled = inputValue;
                        document.getElementById("autor").disabled = inputValue;
                        document.getElementById("gener").disabled = inputValue;
                        document.getElementById("description").disabled = inputValue;
                    })
                    .catch((e) => window.alert(`Libro con id:${inputId} no encontrado`));

                cleanInputs();
                document.getElementById("id").value = "";
            }
        };

        const validateInputs = () => { };

        const setDataInputs = (e) => {
            document.getElementById("img").value = e.img;
            document.getElementById("imgPrev").src = e.img;
            document.getElementById("title").value = e.title;
            document.getElementById("autor").value = e.autor;
            document.getElementById("gener").value = e.gener;
            document.getElementById("description").value = e.description;
        };

        switch (crudAction) {
            case 1:
                return (
                    <>
                        <div className="img">
                            <img src={Interrogation} id="imgPrev"></img>
                        </div>
                        <div className="file">
                            <input
                                required={true}
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleSelected}
                                id="file"
                            ></input>
                            <label htmlFor="file">Select an image</label>
                            <span>or into a Url img</span>
                            <input
                                required={true}
                                type="text"
                                name="image"
                                placeholder="url"
                                id="img"
                                onChange={(e) => setImgPrev(e.target.value)}
                            ></input>
                        </div>
                        <ul className="ul-inputs">
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
                                    id="gener"
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
                                    <span>Gener</span>
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
                                            <span>{e.gener}</span>
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
                        <div className="file">
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
                            <input
                                required={true}
                                type="text"
                                name="image"
                                placeholder="url"
                                id="img"
                                onChange={(e) => setImgPrev(e.target.value)}
                                disabled
                            ></input>
                        </div>
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
                                    id="gener"
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
                                    onClick={()=>consultBook(false)}
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
                        <div className="file">
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
                            <input
                                required={true}
                                type="text"
                                name="image"
                                placeholder="url"
                                id="img"
                                onChange={(e) => setImgPrev(e.target.value)}
                                disabled
                            ></input>
                        </div>
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
                                    id="gener"
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
                                    onClick={()=>consultBook(true)}
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
        <div className="crud-action">
            <IoMdArrowBack className="icon" onClick={() => setCrudAction(null)} />
            {returnSection()}
        </div>
    );
}
