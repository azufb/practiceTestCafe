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
                        <span className={modalEmoji}>π₯π₯π₯π₯</span>
                        <p className={modalText}>ModalγεΊηΎ!!</p>
                        <span className={modalEmoji}>π₯π₯π₯π₯</span>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
};