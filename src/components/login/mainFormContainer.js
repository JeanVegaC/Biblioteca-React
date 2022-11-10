import Book from '../../assets/book2.png'

export default function MainFormContainer ({refMainForm, setFormActive}){
    
    return (
        <div ref={refMainForm} className='form'>
                <header>
                    <h1>Welcome to Biblioteca</h1>
                </header>
                <div className='logo'>
                    <img src={Book}></img>
                </div>
                <div className='inputs'>
                    <div onClick={() => setFormActive('signin')} className='button'>CREATE ACCOUNT</div>
                    <div onClick={() => setFormActive('login')} className='button'>LOGIN</div>
                    <a>Terms & Conditions</a>
                </div>
            </div>
    )
}