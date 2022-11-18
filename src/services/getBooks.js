export const getBooks = async () => {
    // let res = await fetch('http://localhost:4000/api/books'),
    let res = await fetch('https://dbbiblioteca.vercel.app/api/books'),
        json = await res.json();

        
    return await json;
}