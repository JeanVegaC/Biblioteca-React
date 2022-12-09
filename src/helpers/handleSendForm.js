import { deleteBook } from "../services/deleteBook";
import { postBook } from "../services/postBook";
import { putBook } from "../services/putBook";

export const handleSendForm = async (method, data, id) => {

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

    const body = data

    switch (method) {
        case 1:
            return postBook(body).then(e => e);
        case 2:
            return putBook(body, id).then(e=> e);
        case 3:
            return deleteBook(id).then(e=> e);
        default:
            break;
    }
}