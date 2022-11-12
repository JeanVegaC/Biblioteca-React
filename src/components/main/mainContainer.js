import Header from './header';
import Nav from './nav';
import Library from './library/library';
import Crud from './crud/crud';

import "./mainContainer.css"; //CSS

export default function MainContainer({ section, setSection }) {

    const returnSection = () => {
        switch (section) {
            case 'library':
                return <Library></Library>
            case 'searchBook':
                return (
                    <h1>You are in SearchBook</h1>
                )
            case 'crud':
                return (
                    <Crud></Crud>
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
                    {returnSection()}
                </div>
            </main>
        </>
    )
}