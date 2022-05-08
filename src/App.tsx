import { Routing } from './components/Routing';
import { wrapper, title, footer, footerText } from './styles/common.css';
import './styles/global.css';

export const App = () => {
    return (
        <div>
            <div className={wrapper}>
                <h1 className={title}>Test Caf&eacute;を使ってE2Eテストしてみる!</h1>
                <Routing />
                <footer className={footer}>
                    <p className={footerText}>&copy;azunyan 2022.</p>
                </footer>
            </div>
        </div>
    )
}