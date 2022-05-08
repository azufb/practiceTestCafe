import { CustomLink } from './CustomLink';
import { navigation } from '../styles/navigation.css';

export const Navigation = () => {
    return (
        <div className={navigation}>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='form'>Form</CustomLink>
            <CustomLink to='buttons'>Buttons</CustomLink>
        </div>
    )
};