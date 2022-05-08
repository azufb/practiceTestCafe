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
    width: '25vw',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const modalText = style({
    fontWeight: 'bold',
    fontSize: '2em',
    margin: '0'
});

export const modalEmoji = style({
    fontSize: '2em',
    margin: '0'
});