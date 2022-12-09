import { useEffect, useState, useRef } from "react";
import { BiUserCircle } from 'react-icons/bi';
import ModalMsg from '../shared/modalMsg';
import "./nav.css";

export default function Nav({ section, setSection, user }) {
    
    const [showModalMsg, setShowModalMsg] = useState(false);
    const [msgModal, setMsgModal] = useState('Undefined');

    const refLibrary = useRef(),
        refSearchBook = useRef(),
        refCrud = useRef(),
        refUser = useRef();

    useEffect(() => {
        document.querySelectorAll('.li-section').forEach(e => e.classList.remove('li-selected'));

        if (refLibrary && refSearchBook && refCrud && refUser) {

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
                case 'user':
                    refUser.current.classList.add('li-selected');
                    break;
            }
        }
    }, [section]);

    const handleRol = () => {
        if (user.rol !== 'admin') {
            setMsgModal('you dont have enough permission')
            setShowModalMsg(true);
            return 
        }
        setSection('crud');
    }

    return (
        <>
        {showModalMsg && <ModalMsg msg={msgModal} setShowModalMsg={setShowModalMsg}/>}
        <nav className="nav show-nav">
            <ul className="ul-sections">
                <li ref={refUser} onClick={() => setSection('user')} className="li-section li-user">
                    <BiUserCircle className="icon" />
                    <span>{user.name.toUpperCase().split(' ')[0] + ` (${user.rol})`}</span>
                </li>
                <li ref={refLibrary} onClick={() => setSection('library')} className="li-section">
                    <span>Librería</span>
                </li>
                <li ref={refSearchBook} onClick={() => setSection('searchBook')} className="li-section">
                    <span>Buscar Libro</span>
                </li>
                <li ref={refCrud} onClick={handleRol} className="li-section">
                    <span>CRUD</span>
                </li>
            </ul>
        </nav>
        </>
    );
}
