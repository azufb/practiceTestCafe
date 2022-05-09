import { pageTitle, homeText } from '../styles/home.css';
import { contents, tabContents } from '../styles/common.css';

export const Home = () => {
    return (
        <>
            <div className={`${contents} ${tabContents}`}>
                <h1 className={pageTitle}>This is Home!</h1>
                <p className={homeText}>Home画面です。</p>
            </div>
        </>
    )
}