import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    cardDetails: {
        display:   'inline-block',
        textAlign: 'left',
        maxWidth:  800,
        width:     '100%',
        height:    '100%',
    },
    cardLink: {
        height: '100%',
    },
    cardDetailsMediaBox: {
        objectFit: 'cover',
        height:    300,
    },
    cardDetailsMedia: {
        width:  '100%',
        height: '100%',
    },
});
