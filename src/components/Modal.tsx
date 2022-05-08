import { modalBack, modal, modalText, modalEmoji } from '../styles/modal.css';

export const Modal = (props: any) => {
    const closeModal = () => {
        props.setShow(false);
    }

    return (
        <div onClick={closeModal}>
            { props.show ? (
                <div className={modalBack}>
                    <div className={modal}>
                        <p className={modalEmoji}>🔥🔥🔥🔥</p>
                        <p className={modalText}>Modalが出現!!</p>
                        <p className={modalEmoji}>🔥🔥🔥🔥</p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
};