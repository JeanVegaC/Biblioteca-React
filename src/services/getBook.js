export const getBook = async (id)=>{

    const res = await fetch('https://dbbiblioteca.vercel.app/api/books/'+id),
    json = res.json();

    return json;
}