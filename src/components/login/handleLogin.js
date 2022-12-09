import { validateLogin } from '../../services/login';

export const handleLogin = async (refInputUser,refInputPass,setIsAuth, setUser, setShowModalMsg)=>{
    const user = refInputUser.current.value,
    pass = refInputPass.current.value;
    const authRes = await validateLogin(user, pass);

    setIsAuth(authRes.auth);
    setUser(authRes.userData);
    if(authRes.auth === false) setShowModalMsg(true);
}