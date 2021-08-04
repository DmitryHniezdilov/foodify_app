import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    loading: {
        backgroundColor: theme.palette.background.paper,
        paddingTop:      '40vh',
        width:           '100%',
        height:          '100%',
        justifyContent:  'center',
        alignItems:      'center',
    },
}));
