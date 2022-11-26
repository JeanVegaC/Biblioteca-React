import { deleteBook } from "../services/deleteBook";
import { postBook } from "../services/postBook";
import { putBook } from "../services/putBook";

export const handleSendForm = (method, data, id) => {

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
    let msg;

    switch (method) {
        case 1:
            msg = postBook(body);
            break;
        case 2:
            msg = putBook(body, id);
            break;
        case 3:
            msg = deleteBook(id);
            break;
        default:
            break;
    }

    return;

}