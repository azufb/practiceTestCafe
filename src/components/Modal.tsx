import { modalBack, modal } from '../styles/modal.css';

export const Modal = (props: any) => {
    const closeModal = () => {
        props.setShow(false);
    }

    return (
        <div onClick={closeModal}>
            { props.show ? (
                <div className={modalBack}>
                    <div className={modal}>
                        <p>Modal</p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
};