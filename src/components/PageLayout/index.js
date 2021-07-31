import React from 'react';
import PropTypes from 'prop-types';
import { Box, CssBaseline, Container  } from '@material-ui/core';
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
            <Box
                className = { classes.pageLayoutBox }>

                <main className = { classes.toolbar }>{children}</main>

            </Box>
            <Footer/>
        </Container>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node,
};

export default PageLayout;
