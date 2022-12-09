import React, { useState, useEffect } from "react";
import { getResults } from "../../../services/getResults";
import ModalBook from "../../shared/modalBook";
import Book from "../../shared/book";
import { getBooks } from "../../../services/getBooks";
import "./search.css";

export default function Search() {

    const [book, setBook] = useState(null);
    const [results, setResults] = useState(null);
    const [idBook, setIdBook] = useState(null);
    const [genderFilter, setGenderFilter] = useState('All');

    useEffect(() => {
        if(genderFilter){
            getBooks().then(e=> setResults(e)); 
        }
    }, []);

    useEffect(() => {
        if (book) {
            getResults(book).then(e => setResults(e))
        }else{
            getBooks().then(e=> setResults(e));
        }
    }, [book]);

    useEffect(() => {
        if(genderFilter){
            document.querySelectorAll('.li-gender').forEach(e=> e.classList.remove('selected'));
            document.getElementById(genderFilter).classList.add('selected');
        }
    }, [genderFilter]);

    const BooksFiltered = () => {
        if (genderFilter == 'All') {
            return (
                <ul className="ul-books">
                    {
                        results && results.map(e => (
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
                        ))
                    }
                </ul>
            )
        } else {
            return (
                <ul className="ul-books">
                    {results && results.map(e => {
                        if (e.gender == genderFilter) {
                            return (
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
                            )
                        }
                    })}
                </ul>
            )
        }
    }

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

            {!idBook && <ul className="ul-genders">
                <li className="li-gender li-gender selected" id="All" onClick={() => setGenderFilter('All')}>
                    <span>All</span>
                </li>
                <li className="li-gender" id="AudioBook" onClick={() => setGenderFilter('AudioBook')}>
                    <span>AudioBook</span>
                </li>
                <li className="li-gender" id="Infantil" onClick={() => setGenderFilter('Infantil')}>
                    <span>Infantil</span>
                </li>
                <li className="li-gender" id="Romántica" onClick={() => setGenderFilter('Romántica')}>
                    <span>Romántica</span>
                </li>
                <li className="li-gender" id="Literaria" onClick={() => setGenderFilter('Literaria')}>
                    <span>Literaria</span>
                </li>
                <li className="li-gender" id="Autoayuda" onClick={() => setGenderFilter('Autoayuda')}>
                    <span>Autoayuda</span>
                </li>
                <li className="li-gender" id="Actualidad" onClick={() => setGenderFilter('Actualidad')}>
                    <span>Actualidad</span>
                </li>
                <li className="li-gender" id="Religión" onClick={() => setGenderFilter('Religión')}>
                    <span>Religión</span>
                </li>
                <li className="li-gender" id="Others" onClick={() => setGenderFilter('Others')}>
                    <span>Others</span>
                </li>
            </ul>}

            {idBook && <ModalBook id={idBook} setIdBook={setIdBook} />}

            {!idBook && genderFilter &&  <BooksFiltered/>}
        </div>
    );
}
