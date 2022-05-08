import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { menu, activeMenu } from '../styles/navigation.css';

export const CustomLink = ({children, to}: LinkProps) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <>
            <Link to={to} className={`${menu} ${match ? activeMenu: ''}` }>{children}</Link>
        </>
    )
};