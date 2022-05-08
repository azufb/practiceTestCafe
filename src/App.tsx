import { Routing } from './components/Routing';
import { title } from './styles/title.css';

export const App = () => {
    return (
        <div>
            <h1 className={title}>Test Caf&eacute;を使ってみる！</h1>
            <Routing />
        </div>
    )
}