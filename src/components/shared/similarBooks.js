import React, { useState, useEffect } from 'react';
import { getBooksByGender } from '../../services/getBooksByGender';
import Book from './book'

export default function SimilarBooks({ gender, setIdBook }) {

    const [books, setBooks] = useState(null);

    useEffect(() => {
        if (gender) {
            getBooksByGender(gender).then(e => {setBooks(e)});
        }
    }, []);

    return (
        <>
        <h2>Similar Books</h2>
            <ul className='ul-books'>
            {
                books && books.map(e => (
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
        </>
    )
}