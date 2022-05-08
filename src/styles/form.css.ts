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
    marginBottom: '2rem',
    padding: '0.5rem 0'
});

export const activeSubmitBtn = style({
    backgroundColor: '#0CB981',
    color: '#FFFFFF'
});