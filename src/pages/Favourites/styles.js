import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    item: {
        display:   'flex',
        textAlign: 'center',
    },
    modal: {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'white',
        border:          '2px solid #000',
        boxShadow:       'grey',
        padding:         5,
    },
});
