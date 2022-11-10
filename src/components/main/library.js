import Book from "./book";
import Loader from "./loader";
import "./library.css"; // CSS
import { getBooks } from "../../services/getBooks";
import { getBook } from "../../services/getBook";
import { useState, useEffect } from "react";
import ModalBook from "./modalBook";

export default function Library() {
    const [listBooks, setListBooks] = useState(null);
    const [idBook, setIdBook] = useState(null);

    useEffect(() => {
        getBooks().then(e => setListBooks(e))
    }, []);

    return (
        <div className='library expand-library'>
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


/*

{listBooks && !idBook && listBooks.map(e=>(
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
*/