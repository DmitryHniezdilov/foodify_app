import React from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, Container, Grid} from '@material-ui/core';
import Footer from '../Footer';
import Header from '../Header';
import {useStyles} from './styles';

const PageLayout = ({children}) => {
    const classes = useStyles();

    return (
        <Container
            className = { classes.pageLayout }
            maxWidth = 'lg'>
            <Header/>
            <CssBaseline />
            <Grid
                container
                alignItems = 'center'
                className = { classes.pageLayoutBox }
                component = 'main'
                justify = 'center'
                spacing = { 4 }>

                {children}

            </Grid>
            <Footer/>
        </Container>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node,
};

export default PageLayout;
