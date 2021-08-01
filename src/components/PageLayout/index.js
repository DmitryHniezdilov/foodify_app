import React from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, Container, Box} from '@material-ui/core';
import Footer from '../Footer';
import Header from '../../containers/Header';
import {useStyles} from './styles';

const PageLayout = ({children, isModal}) => {
    const classes = useStyles();

    return (
        <Container
            className = { classes.pageLayout }
            maxWidth = 'lg'>
            <Header isModal = { isModal }/>
            <CssBaseline />
            <Box
                className = { classes.pageLayoutBox }
                component = 'main'>

                {children}

            </Box>
            <Footer className = { classes.footer }/>
        </Container>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node,
    isModal:  PropTypes.bool,
};

export default PageLayout;
