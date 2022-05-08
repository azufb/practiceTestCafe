import { style } from '@vanilla-extract/css';

export const formArea = style({
    width: '50vw',
    margin: '0 auto'
});

export const formLabel = style({
    display: 'block'
});

export const formInput = style({
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '1.5rem',
    selectors: {
        '&:nth-last-child(-n + 2)': {
            marginBottom: '0'
        }
    }
});

export const submitBtn = style({
    display: 'block',
    width: '100%',
    marginTop: '2.5rem'
});