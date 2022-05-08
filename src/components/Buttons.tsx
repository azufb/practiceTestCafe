import { useState } from 'react';
import { Modal } from './Modal';
import { buttons, button, button1, button2, button3 } from '../styles/buttons.css';
import { contents } from '../styles/common.css';

export const Buttons = () => {
    const [show, setShow] = useState<Boolean>(false);

    const switchShowModal = () => {
        setShow(true);
    };

    return (
        <div>
            <div className={contents}>
                <h1>This is Buttons!</h1>
                <div className={buttons}>
                    <button className={`${button} ${button1}`}>ボタン1</button>
                    <button onClick={switchShowModal} className={`${button} ${button2}`}>ボタン2</button>
                    <button className={`${button} ${button3}`}>ボタン3</button>
                </div>
                <Modal show={show} setShow={setShow} />
            </div>
        </div>
    )
};