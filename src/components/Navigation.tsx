import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='form'>Form</Link>
            <Link to='buttons'>Buttons</Link>
        </div>
    )
}