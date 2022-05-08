import { useState } from 'react';
import { Modal } from './Modal';
import { buttons } from '../styles/buttons.css';

export const Buttons = () => {
    const [show, setShow] = useState<Boolean>(false);

    const switchShowModal = () => {
        setShow(true);
    };

    return (
        <div>
            <h1>This is Buttons!</h1>
            <div className={buttons}>
                <button>ボタン1</button>
                <button onClick={switchShowModal}>ボタン2</button>
                <button>ボタン3</button>
            </div>
            <Modal show={show} setShow={setShow} />
        </div>
    )
};