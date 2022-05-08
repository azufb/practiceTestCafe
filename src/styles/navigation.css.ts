import { style } from '@vanilla-extract/css';

export const navigation = style({
    textAlign: 'center'
});

export const menu = style({
    backgroundColor: '#1B202E',
    color: '#FFFFFF',
    borderRadius: '10px 10px 0 0',
    padding: '1rem',
    textDecoration: 'none'
});

export const activeMenu = style({
    backgroundColor: '#0CB981',
});