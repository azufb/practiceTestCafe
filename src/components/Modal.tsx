import { modalBack, modal, modalText, modalEmoji } from '../styles/modal.css';

export const Modal = (props: any) => {
    const closeModal = () => {
        props.setShow(false);
    }

    return (
        <div onClick={closeModal}>
            { props.show ? (
                <div className={`${modalBack} test-modal`}>
                    <div className={modal}>
                        <span className={modalEmoji}>🔥🔥🔥🔥</span>
                        <p className={modalText}>Modalが出現!!</p>
                        <span className={modalEmoji}>🔥🔥🔥🔥</span>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
};