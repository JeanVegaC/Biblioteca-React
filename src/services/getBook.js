export const getBook = async (id)=>{

    // const res = await fetch('http://localhost:4000/api/books/'+id),
    let res = await fetch('https://dbbiblioteca.vercel.app/api/books/'+id),
    json = res.json();

    return json || false;
}