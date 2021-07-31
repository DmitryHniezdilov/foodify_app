import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Box, Button, Grid, List, ListItem} from '@material-ui/core';
import {useStyles} from './styles';

const Header = () => {
    const classes = useStyles();

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
                        className = { classes.headerFirstItem }
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
                        xs = { 6 }>
                        <Button
                            component = { RouterLink }
                            size = 'small'
                            to = '/favourites'>
                            Favourites
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Header;
