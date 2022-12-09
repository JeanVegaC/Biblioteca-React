import { getUsers } from "./getUsers"

export const validateLogin = async (user, pass) => {
    const users = await getUsers();
    let auth = false;
    let userData;
    users.map(e=>{
        if(e.userName === user) if(e.password === pass) {auth = true; userData = e}
    })
    return {auth, userData};
}