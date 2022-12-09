import ReactDOM from 'react-dom';
import { IoIosCloseCircle } from 'react-icons/io'
import './modalMsg.css';

export default function ModalMsg({ msg, setShowModalMsg }) {

    return ReactDOM.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className="modal-msg">
                <header className="header">
                    <IoIosCloseCircle className='icon' onClick={() => setShowModalMsg(false)} />
                </header>
                <div className="message">
                    <p>{msg}</p>
                </div>
                <div className="button">
                    <button onClick={() => setShowModalMsg(false)}>Aceptar</button>
                </div>
            </div>
        </>,
        document.getElementById('modal-msg')
    )
}