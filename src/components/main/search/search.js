import React, { useState, useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { getResults } from "../../../services/getResults";
import ModalBook from "../shared/modalBook";
import Book from "../shared/book";

import "./search.css";
export default function Search() {

    const [book, setBook] = useState(null);
    const [results, setResults] = useState(null);
    const [idBook, setIdBook] = useState(null);

    useEffect(() => {
        if (book) {
            getResults(book).then(e => setResults(e))
        }
    }, [book]);

    //  useEffect(() => {
    //     if(results){
    //         console.log(results)
    //     }
    //  }, [results]);

    return (
        <div className="search expand-section">
            {!idBook && <header>
                <div className="searcher-container">
                    <input
                        placeholder="Title"
                        type="text"
                        onChange={(e) => setBook(e.target.value)}
                    ></input>
                </div>
            </header>}
            {idBook && <ModalBook id={idBook} setIdBook={setIdBook} />}
            <ul className="ul-books">
                {results && !idBook && results.map(e => (
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
        </div>
    );
}
