import { useEffect, useRef } from "react";
import "./nav.css";

export default function Nav({ section, setSection }) {

    const refLibrary = useRef(),
        refSearchBook = useRef(),
        refCrud = useRef();

    useEffect(() => {
        document.querySelectorAll('.li-section').forEach(e=>e.classList.remove('li-selected'));

        if (refLibrary.current && refSearchBook && refCrud) {

            switch (section) {
                case 'library':
                    refLibrary.current.classList.add('li-selected');
                    break;
                case 'searchBook':
                    refSearchBook.current.classList.add('li-selected');
                    break;
                case 'crud':
                    refCrud.current.classList.add('li-selected');
                    break;
            }
        }
    }, [section]);

    return (
        <nav className="nav show-nav">
            <ul className="ul-sections">
                <li ref={refLibrary} onClick={()=> setSection('library')} className="li-section">
                    <span>Librería</span>
                </li>
                <li ref={refSearchBook} onClick={()=> setSection('searchBook')} className="li-section">
                    <span>Buscar Libro</span>
                </li>
                <li ref={refCrud} onClick={()=> setSection('crud')} className="li-section">
                    <span>CRUD</span>
                </li>

            </ul>
        </nav>
    );
}
