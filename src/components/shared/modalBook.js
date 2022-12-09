import { useState, useEffect } from "react";
import { IoMdArrowBack } from 'react-icons/io';
import { getBook } from "../../services/getBook";
import "./modalBook.css"
import Loader from "./loader";
import SimilarBooks from "./similarBooks";

export default function ModalBook({ id, setIdBook }) {

    const [book, setBook] = useState(null);

    useEffect(() => {
        if (id) {
            getBook(id).then(e => setBook(e));
        }
    }, [id]);

    return (
        <div className="modal-book">
            <IoMdArrowBack className="icon" onClick={() => setIdBook(null)} />

            {!book && <Loader />}

            {book &&
                <>
                    <div className="data-book">
                        <div className="book-img">
                            <img src={book.img}></img>
                        </div>
                        <div className="book-information">
                            <ul className="ul-data-book">
                                <li className="li-data-book">
                                    <span>Title</span>
                                    <span>{book.title}</span>
                                </li>
                                <li className="li-data-book">
                                    <span>Autor</span>
                                    <span>{book.autor}</span>
                                </li>
                                <li className="li-data-book">
                                    <span>Gender</span>
                                    <span>{book.gender}</span>
                                </li>
                                <li className="li-data-book">
                                    <span>Description</span>
                                    <span>{book.description}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <SimilarBooks
                    gender={book.gender}
                    setIdBook={setIdBook}
                    ></SimilarBooks>
                </>
            }
        </div>
    )
}