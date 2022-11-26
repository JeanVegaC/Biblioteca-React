export const putBook = async (body,id)=>{

    const options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
    }

    // return fetch('https://dbbiblioteca.vercel.app/api/books/book',options).then(e => !e.ok && console.log('Error en petición, cod: '+e.status))
    return fetch('http://localhost:4000/api/books/book/'+id,options).then(e => e.ok && true);

}