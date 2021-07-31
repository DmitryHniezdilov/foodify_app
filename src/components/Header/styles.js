import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    headerList: {
        minHeight:        '60px',
        '& :first-child': {
            justifyContent: 'flex-end',
        },
    },
});
