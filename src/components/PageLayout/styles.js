import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    pageLayout: {
        backgroundColor: 'inherit',
        display:         'flex',
        flexDirection:   'column',
        position:        'relative',
        minHeight:       '100vh',
    },
    pageLayoutBox: {
        flexGrow:  '1',
        textAlign: 'center',
    },
    footer: {
        flexShrink: '0',
    },
});
