import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        display:   'inline-block',
        textAlign: 'left',
        maxWidth:  500,
        width:     '100%',
        height:    '100%',
    },
    cardLink: {
        height: '100%',
    },
    cardMediaBox: {
        objectFit: 'cover',
        height:    250,
    },
    cardMedia: {
        width:  '100%',
        height: '100%',
    },
    cardInstructions: {
        display:   '-webkit-box',
        boxOrient: 'vertical',
        lineClamp: 4,
        wordBreak: 'break-all',
        overflow:  'hidden',
    },
});
