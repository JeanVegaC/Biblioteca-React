export const putBook = async (body,id)=>{

    const options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
    }

    return fetch('https://dbbiblioteca.vercel.app/api/books/'+id,options).then(e => e.ok && true)
    // return fetch('http://localhost:4000/api/books/'+id,options).then(e => e.ok && true);

}