import { contents, tabContents } from '../styles/common.css';

export const Home = () => {
    return (
        <>
            <div className={`${contents} ${tabContents}`}>
                <h1>This is Home!</h1>
                <p>Home画面です。</p>
            </div>
        </>
    )
}