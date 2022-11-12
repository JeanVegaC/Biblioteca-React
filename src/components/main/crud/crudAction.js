import "./crudAction.css";
import { IoMdArrowBack } from "react-icons/io";
import Interrogation from '../../../assets/interrogation.jpg';
export default function CrudAction({ crudAction, setCrudAction }) {
    const returnSection = () => {
        switch (crudAction) {
            case 1:
                return (
                    <>
                        <div className="img">
                        <img src={Interrogation}></img>
                        </div>
                        <div className="file">
                            <input required={true} type="file" accept="image/*" id="file"></input>
                            <label htmlFor="file">Select an image</label>
                        </div>
                        <ul className="ul-inputs">
                            <li className="li-input">
                                <input required={true} autoComplete="off" type='text'></input>
                                <label>Title</label>
                            </li>
                            <li className="li-input">
                                <input required={true} autoComplete="off" type='text'></input>
                                <label>Autor</label>
                            </li>
                            <li className="li-input">
                                <input required={true} autoComplete="off" type='text'></input>
                                <label>Género</label>
                            </li>
                            <li className="li-input">
                                <input required={true} autoComplete="off" type='text'></input>
                                <label>Descripción</label>
                            </li>
                        </ul>
                    </>
                );
            case 2:
                return <h1>READ</h1>;
            case 3:
                return <h1>UPDATE</h1>;
            case 4:
                return <h1>DELETE</h1>;
        }
    };

    return (
        <div className="crud-action">
            <IoMdArrowBack className="icon" onClick={() => setCrudAction(null)} />
            {returnSection()}
        </div>
    );
}
