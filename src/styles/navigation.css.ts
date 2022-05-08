import { style } from '@vanilla-extract/css';

export const navigation = style({
    display: 'flex'
});

export const menu = style({
    backgroundColor: '#1B202E',
    color: '#FFFFFF',
    borderRadius: '20px 20px 0 0',
    padding: '1rem',
    textDecoration: 'none',
    width: '100%',
    textAlign: 'center'
});

export const activeMenu = style({
    backgroundColor: '#0CB981',
});