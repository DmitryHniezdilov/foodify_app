import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    modal: {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        theme.spacing(0, 3),
    },
    paper: {
        width:         '100%',
        maxWidth:      600,
        padding:       theme.spacing(3),
        marginLeft:    'auto',
        marginRight:   'auto',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
    },
    form: {
        width:     '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        marginTop: theme.spacing(2),
    },
}));
