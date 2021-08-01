import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        maxWidth: 395,
    },
    cardMedia: {
        height:     0,
        paddingTop: '56.25%',
    },
    cardInstructions: {
        display:   '-webkit-box',
        boxOrient: 'vertical',
        lineClamp: 4,
        wordBreak: 'break-all',
        overflow:  'hidden',
    },
});
