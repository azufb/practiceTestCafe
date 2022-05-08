import { useState } from 'react';
import { Modal } from './Modal';

export const Buttons = () => {
    const [show, setShow] = useState<Boolean>(false);

    const switchShowModal = () => {
        setShow(true);
    };

    return (
        <div>
            <h1>This is Buttons!</h1>
            <div>
                <button>ボタン1</button>
                <button onClick={switchShowModal}>ボタン2</button>
                <Modal show={show} setShow={setShow} />
                <button>ボタン3</button>
            </div>
        </div>
    )
};