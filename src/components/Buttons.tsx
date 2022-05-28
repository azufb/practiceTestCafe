import { useState } from 'react';
import { Modal } from './Modal';
import { pageTitle, buttons, button, button1, buttonModal, button2 } from '../styles/buttons.css';
import { contents, tabContents } from '../styles/common.css';

export const Buttons = () => {
    const [show, setShow] = useState<Boolean>(false);

    const switchShowModal = () => {
        setShow(true);
    };

    return (
        <>
            <div className={`${contents} ${tabContents}`}>
                <h1 className={pageTitle}>Click buttons!</h1>
                <div className={buttons}>
                    <button className={`${button} ${button1}`}>ボタン1</button>
                    <button onClick={switchShowModal} className={`${button} ${buttonModal}`}>モーダル</button>
                    <button className={`${button} ${button2}`}>ボタン2</button>
                </div>
                <Modal show={show} setShow={setShow} />
            </div>
        </>
    )
};