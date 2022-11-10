import { getUsers } from "./getUsers"

export const validateLogin = async (user, pass) => {
    const users = await getUsers();
    let auth = false;
    users.map(e=>{
        if(e.user == user) if(e.password == pass) auth = true;
    })
    return auth;
}