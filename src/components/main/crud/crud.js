import { useState, useEffect } from 'react';
import { AiFillRead, AiFillDelete } from 'react-icons/ai';
import { IoMdCreate, IoIosRefresh } from 'react-icons/io';
import './crud.css';
import CrudAction from './crudAction';

export default function Crud() {
    const [crudAction, setCrudAction] = useState(null);

    useEffect(() => {
        // crudAction && console.log(crudAction);
    }, [crudAction]);

    return (
        <div className="crud expand-section">
            {crudAction && <CrudAction crudAction={crudAction} setCrudAction={setCrudAction}></CrudAction>}

            {!crudAction &&
                <ul className='ul-crud'>
                    <li className='li-crud' onClick={() => setCrudAction(1)}>
                        <IoMdCreate className='icon'></IoMdCreate>
                        <span>Create</span>
                    </li>
                    <li className='li-crud' onClick={() => setCrudAction(2)}>
                        <AiFillRead className='icon'></AiFillRead>

                        <span>Read</span>
                    </li>
                    <li className='li-crud' onClick={() => setCrudAction(3)}>
                        <IoIosRefresh className='icon'></IoIosRefresh>
                        <span>Update</span>
                    </li>
                    <li className='li-crud' onClick={() => setCrudAction(4)}>
                        <AiFillDelete className='icon'></AiFillDelete>
                        <span>Delete</span>
                    </li>
                </ul>}
        </div>
    )
}