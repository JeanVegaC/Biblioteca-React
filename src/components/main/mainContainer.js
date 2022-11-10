import Header from './header';
import Nav from './nav';
import Library from './library';
import "./mainContainer.css"; //CSS

export default function MainContainer({ section, setSection }) {

    const returnSection = (section) => {
        switch (section) {
            case 'library':
                return <Library></Library>
            case 'searchBook':
                return (
                    <h1>You are in Search Book</h1>
                )
            case 'crud':
                return (
                    <h1>You are in crud</h1>
                )
        }
    }
    return (
        <>
            <Header></Header>
            <main className='main'>
                <Nav
                    section={section}
                    setSection={setSection}
                />
                <div className='section'>
                    {returnSection(section)}
                </div>
            </main>
        </>
    )
}