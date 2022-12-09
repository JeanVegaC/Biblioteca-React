import Header from "./header";
import Nav from "./nav";
import Library from "./library/library";
import Crud from "./crud/crud";
import Search from "./search/search";
import User from "./user/user";
import "./mainContainer.css";

export default function MainContainer({section, setSection, setIsAuth, user, setUser}) {
    const returnSection = () => {
        switch (section) {
            case "library":
                return <Library></Library>;
            case "searchBook":
                return <Search></Search>;
            case "crud":
                return <Crud></Crud>;
                case "user":
                return <User user={user} setUser={setUser}></User>
        }
    };
    
    return (
        <>
            <Header setIsAuth={setIsAuth}></Header>
            <main className="main">
                <Nav section={section} setSection={setSection} user={user} />
                <div className="section">{returnSection()}</div>
            </main>
        </>
    );
}
