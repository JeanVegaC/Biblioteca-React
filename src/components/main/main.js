import React, { useState, useEffect } from "react";
import MainForm from "../login/mainForm";

import MainContainer from "./mainContainer";
export default function Main() {
    const [isAuth, setIsAuth] = useState(false);
    const [section, setSection] = useState("library");

    return (
        <main>
            {isAuth ? 
                <MainContainer
                section={section}
                setSection={setSection}
                />
            : 
                <MainForm setIsAuth={setIsAuth} />
            }
        </main>
    );
}
