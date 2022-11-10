export const getUsers = async () => {

    const res = await fetch('https://dbbiblioteca.vercel.app/api/users'),
    json = await res.json();

    return await json;
};
