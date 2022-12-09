export const postBook = async (body)=>{

    const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
    }

    return fetch('https://dbbiblioteca.vercel.app/api/books/upload/book',options).then(e => !e.ok && console.log('Error en petición, cod: '+e.status))
    // return fetch('http://localhost:4000/api/books/upload/book',options).then(e => e.ok && true);

}