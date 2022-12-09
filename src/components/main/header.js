import { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import "./header.css";
import { openAndCloseNav } from "../../helpers/openAndCloseNav";

export default function Header({ setIsAuth }) {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        openAndCloseNav(showNav);
    }, [showNav]);

    return (
        <header>
            <div className="header">
                <div className="left">
                    {showNav ? (
                        <MdOutlineClose
                            onClick={() => setShowNav(false)}
                            className="icon"
                        />
                    ) : (
                        <FiMenu onClick={() => setShowNav(true)} className="icon" />
                    )}
                    <div className="logo">
                        <img src={Logo}></img>
                    </div>
                    <span>Biblioteca</span>
                </div>
                <div className="right" onClick={() => setIsAuth(false)}>
                    <a>LogOut</a>
                </div>
            </div>
        </header>
    );
}
