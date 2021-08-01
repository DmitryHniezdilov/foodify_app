import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import {Box, Button, Grid, List, ListItem} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/actions/general';
import {useStyles} from './styles';

const Header = ({isModal}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(action.setOpenModal());
    };

    return (
        <Box
            component = 'header'>
            <Box component = 'nav'>
                <Grid
                    container
                    disablePadding
                    className = { classes.headerList }
                    component = { List }>
                    <Grid
                        item
                        component = { ListItem }
                        xs = { 6 }>
                        <Button
                            component = { RouterLink }
                            size = 'small'
                            to = '/'>
                            Random Dish
                        </Button>
                    </Grid>
                    <Grid
                        item
                        component = { ListItem }
                        xs = { 2 }>
                        <Button
                            component = { RouterLink }
                            size = 'small'
                            to = '/favourites'>
                            Favourites
                        </Button>
                    </Grid>
                    <Grid
                        item
                        component = { ListItem }
                        xs = { 4 }>
                        { isModal && (
                            <Button
                                color = 'primary'
                                size = 'small'
                                variant = 'contained'
                                onClick = { handleOpen }>
                                Add custom dish
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

Header.propTypes = {
    isModal: PropTypes.bool,
};

export default Header;
