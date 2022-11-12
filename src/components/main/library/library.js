import { useState, useEffect } from "react";
import Book from "../shared/book";
import Loader from "../shared/loader";
import ModalBook from "../shared/modalBook";
import { getBooks } from "../../../services/getBooks";
import "./library.css"; // CSS

export default function Library() {
    const [listBooks, setListBooks] = useState(null);
    const [idBook, setIdBook] = useState(null);

    useEffect(() => {
        getBooks().then(e => setListBooks(e))
    }, []);

    return (
        <div className='library expand-section'>
            {!listBooks && <Loader />}

            {idBook && <ModalBook id={idBook} setIdBook={setIdBook}/>}

            {listBooks && !idBook &&
                <ul className='ul-books'>
                    {listBooks.map(e => (
                        <Book
                            key={e.id}
                            autor={e.autor}
                            description={e.description}
                            gener={e.gener}
                            id={e.id}
                            title={e.title}
                            img={e.img}
                            setIdBook={setIdBook}
                        />
                    ))}
                </ul>
            }
        </div>
    )
}

