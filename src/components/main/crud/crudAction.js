import "./crudAction.css";
import {useState, useEffect} from 'react';
import { IoMdArrowBack } from "react-icons/io";
import Interrogation from '../../../assets/interrogation.jpg';
import { postBook } from "../../../services/postBook";
import { getBooks } from "../../../services/getBooks";

export default function CrudAction({crudAction, setCrudAction }) {

    const [image, setImage] = useState(null);
    const [imgPrev, setImgPrev] = useState(null);

    const [listBooks, setListBooks] = useState(null);

    useEffect(() => {
        if(!imgPrev) return;
        document.getElementById('imgPrev').src = imgPrev;
    }, [imgPrev]);

    
    

    const returnSection = () => {
        switch (crudAction) {
            case 1:

                const sendHandle = ()=>{

                    //SEND IMG - NOT WORKING
            
                    // if(!image){
                    //     return 
                    // }
                    // console.log(image);
            
                    // const formData = new FormData();
                    // formData.append("file",image);
                    // const options = {
                    //     method:'POST',
                    //     body:formData
                    // }
            
                    // fetch('http://localhost:4000/upload/img',options)
                    // .then(e=>e.text())
                    // .then(e=>console.log(e))
                    // .catch(e=>console.log('Error: '+e));
            
                    // setImage(null);
                    // document.getElementById('file').value = null;
                    
                    let img = document.getElementById('img').value,
                    title = document.getElementById('title').value,
                    autor = document.getElementById('autor').value,
                    gener = document.getElementById('gener').value,
                    description = document.getElementById('description').value;
            
                    const data = {
                        title,
                        autor,
                        gener,
                        description,
                        img
                    }
                    const msg = postBook(data);
                    msg.then(e=> console.log(e));
            
                    document.getElementById('img').value = "";
                    document.getElementById('imgPrev').src = Interrogation;
                    document.getElementById('title').value = ""
                    document.getElementById('autor').value = ""
                    document.getElementById('gener').value = ""
                    document.getElementById('description').value = ""
            
                }
            
                const handleSelected = (e)=>{
                    setImage(e.target.files[0]);
                }
            
                return (
                    <>
                        <div className="img">
                            <img src={Interrogation} id="imgPrev"></img>
                        </div>
                            <div className="file">
                                <input required={true} type="file" name="image" accept="image/*" onChange={handleSelected} id="file"></input>
                                <label htmlFor="file">Select an image</label>
                                <span>or into a Url img</span>
                                <input required={true} type="text" name="image" placeholder="url" id="img" onChange={(e)=>setImgPrev(e.target.value)}></input>
                            </div>
                            <ul className="ul-inputs">
                                <li className="li-input">
                                    <input required={true} autoComplete="off" type='text' id="title"></input>
                                    <label>Title</label>
                                </li>
                                <li className="li-input">
                                    <input required={true} autoComplete="off" type='text' id="autor"></input>
                                    <label>Autor</label>
                                </li>
                                <li className="li-input">
                                    <input required={true} autoComplete="off" type='text' id="gener"></input>
                                    <label>Género</label>
                                </li>
                                <li className="li-input">
                                    <input required={true} autoComplete="off" type='text' id="description"></input>
                                    <label>Descripción</label>
                                </li>
                                <li className="">
                                    <button type="submit" className="button-send" onClick={sendHandle}>Crear</button>
                                </li>
                            </ul>
                    </>
                );
            case 2:
                getBooks().then(e=> setListBooks(e));


                return (
                    <>
                        <ul className="ul-books">
                            <li className="li-book">
                                <div>
                                    <span>Id</span>
                                </div>
                                <div>
                                    <span>Title</span>
                                </div>
                                <div>
                                    <span>Autor</span> 
                                </div>
                                <div>
                                    <span>Gener</span>
                                </div>
                                <div>
                                    <span>Description</span>
                                </div>
                            </li>
                            {listBooks && listBooks.map(e=>(
                                <li className="li-book">
                                    <div>
                                        <span>{e.id}</span>
                                    </div>
                                    <div>
                                        <span>{e.title}</span>
                                    </div>
                                    <div>
                                        <span>{e.autor}</span>
                                    </div>
                                    <div>
                                        <span>{e.gener}</span>
                                    </div>
                                    <div>
                                        <span>{e.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )
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
