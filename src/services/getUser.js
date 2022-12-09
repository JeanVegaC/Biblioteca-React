export const getUser = async (id)=>{
    // const res = await fetch('http://localhost:4000/api/users/'+id),
    const res = await fetch('https://dbbiblioteca.vercel.app/api/users/'+id),
    json = res.json();

    return json || false;
}