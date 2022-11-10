import { validateLogin } from '../../services/login';

export const handleLogin = async (refInputUser,refInputPass,setIsAuth)=>{
    const user = refInputUser.current.value,
    pass = refInputPass.current.value;
    const isAuth = await validateLogin(user, pass);
    setIsAuth(isAuth);

    if(isAuth === false) console.log('error Parameters')
}