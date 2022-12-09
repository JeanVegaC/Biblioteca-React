import React, { useState } from "react";
import MainForm from "../login/mainForm";
import MainContainer from "./mainContainer";

export default function Main() {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [section, setSection] = useState("library");

    return (
        <main>
            {isAuth ? 
                <MainContainer
                section={section}
                setSection={setSection}
                setIsAuth={setIsAuth}
                user={user}
                setUser={setUser}
                />
            : 
                <MainForm isAuth={setIsAuth} setUser={setUser} setIsAuth={setIsAuth}/>
            }
        </main>
    );
}

