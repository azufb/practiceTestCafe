import { style } from '@vanilla-extract/css';

export const formArea = style({
    width: '50vw',
});

export const formLabel = style({
    display: 'block'
});

export const formInput = style({
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '1.5rem',
});

export const submitBtn = style({
    display: 'block',
    width: '100%',
    marginBottom: '2rem'
});