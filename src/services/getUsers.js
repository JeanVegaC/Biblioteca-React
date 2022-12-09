export const getUsers = async () => {

    // const res = await fetch('http://localhost:4000/api/users'),
    const res = await fetch('https://dbbiblioteca.vercel.app/api/users'),
    json = await res.json();

    return await json;
};
