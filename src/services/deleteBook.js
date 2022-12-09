export const deleteBook = async (id)=>{

    const options = {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
    }

    // return fetch('http://localhost:4000/api/books/'+id,options).then(e => e.ok && true);
    return fetch('https://dbbiblioteca.vercel.app/api/books/book',options).then(e => !e.ok && console.log('Error en petición, cod: '+e.status))

}