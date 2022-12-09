import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { signin } from "../../services/signin";
import Libro from "../../assets/book.png";

export default function SignInForm({ setFormActive, setIsAuth, setUser}) {
    const sendData = async () => {
        const userName = document.getElementById("user").value,
            password = document.getElementById("password").value;

        if (userName && password) {
            const msg = await signin({
                userName,
                password,
                rol: "guest",
                name: "Undefined",
                lastName: "Undefined",
            });
            console.log(msg);
            setIsAuth(msg);
            setUser({
                userName,
                password,
                rol: "guest",
                name: userName,
                lastName: "Undefined",
            })
            clearInputs();
        } else {
            alert("null inputs");
        }
    };

    const clearInputs = () => {
        const user = (document.getElementById("user").value = ""),
            pass = (document.getElementById("password").value = "");
    };

    return (
        <form className="signin">
            <header>
                <IoMdArrowBack className="icon" onClick={() => setFormActive(false)} />
                <h1>CREATE ACCOUNT</h1>
            </header>
            <div className="logo">
                <img src={Libro}></img>
            </div>
            <div className="inputs">
                <div className="input">
                    <AiOutlineMail className="icon" />
                    <input name="usser" placeholder="Usser" type="text" id="user"></input>
                </div>
                <div className="input">
                    <AiFillLock className="icon" />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                    ></input>
                </div>
                <a>Terms & Conditions</a>
            </div>
            <div className="button" onClick={sendData}>
                GO!
            </div>
        </form>
    );
}
