import { CustomLink } from './CustomLink';
import { navigation } from '../styles/navigation.css';
import { contents } from '../styles/common.css';

export const Navigation = () => {
    return (
        <>
            <div className={`${contents} ${navigation}`}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='form'>Form</CustomLink>
                <CustomLink to='buttons'>Buttons</CustomLink>
            </div>
        </>
    )
};