import { style } from '@vanilla-extract/css';

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
});

export const title = style({
    textAlign: 'center'
});

export const contents = style({
    width: '50vw',
    margin: '0 auto'
});

export const tabContents = style({
    height: '75vh',
    borderRight: '1px solid #1B202E',
    borderLeft: '1px solid #1B202E',
    borderBottom: '1px solid #1B202E'
});

export const footer = style({
    marginTop: 'auto',
    textAlign: 'center',
});

export const footerText = style({
    margin: '0'
});