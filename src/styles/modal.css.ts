import { style } from '@vanilla-extract/css';

export const modalBack = style({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const modal = style({
    backgroundColor: '#FFFFFF',
    width: '50vw',
    height: '50vh'
});