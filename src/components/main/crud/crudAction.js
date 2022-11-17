import "./crudAction.css";
import { IoMdArrowBack } from "react-icons/io";
import Interrogation from '../../../assets/interrogation.jpg';
import {useState, useEffect} from 'react';

export default function CrudAction({ crudAction, setCrudAction }) {

    const [image, setImage] = useState(null);



    const sendHandle = ()=>{
        if(!image){
            return 
        }
        console.log(image);

        const formData = new FormData();
        formData.append("file",image);
        const options = {
            method:'POST',
            body:formData
        }

        fetch('http://localhost:4000/upload',options)
        .then(e=>e.text())
        .then(e=>console.log(e))
        .catch(e=>console.log('Error: '+e));

        setImage(null);
        document.getElementById('file').value = null;
        
    }

    const handleSelected = (e)=>{
        setImage(e.target.files[0]);
    }

 

    const returnSection = () => {
        switch (crudAction) {
            case 1:
                return (
                    <>
                        <div className="img">
                            <img src={Interrogation}></img>
                        </div>
                        {/* <form action="https://dbbiblioteca.vercel.app/upload" method="POST" encType="multipart/form-data"> */}
                            <div className="file">
                                <input required={true} type="file" name="image" accept="image/*" onChange={handleSelected} id="file"></input>
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
                                <li className="">
                                    <button type="submit" className="button-send" onClick={sendHandle}>Crear</button>
                                </li>
                            </ul>
                        {/* </form> */}
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
