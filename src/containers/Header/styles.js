import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    header: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    headerList: {
        minHeight:        '60px',
        '& :first-child': {
            justifyContent: 'flex-end',
        },
    },
    headerItemModal: {
        justifyContent: 'flex-end',
    },
}));
