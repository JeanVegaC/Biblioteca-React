import './book.css';

export default function Book({autor, description, gener, id, title, img, setIdBook}) {
    return (
        <li className='book'>
            <div className="card">
                <div className="card-img">
                    <img src={img}></img>
                </div>
                <div className="card-info">
                    <p className="text-title">{title}</p>
                    <p className="text-body">{gener}</p>
                    <button className="card-button" onClick={()=>setIdBook(id)}>Read More</button>
                </div>
            </div>
        </li>
    )
}