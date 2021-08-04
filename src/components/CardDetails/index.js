import React from 'react';
import PropTypes from 'prop-types';
import {Card as CardMUI, CardContent, CardMedia, Box, Typography} from '@material-ui/core';
import {useStyles} from './styles';

const CardDetails = (props) => {
    const {imageUrl, dishName, instructions, children} = props;
    const classes = useStyles();
    const image = imageUrl || '../foodify_app/foodify_details_placeholder.svg';

    return (
        <CardMUI className = { classes.cardDetails }>
            <CardContent>
                <Typography
                    align = 'center'
                    component = 'h2'
                    variant = 'h5'>
                    {dishName}
                </Typography>
            </CardContent>
            <Box
                className = { classes.cardDetailsMediaBox }>
                <CardMedia
                    className = { classes.cardDetailsMedia }
                    component = 'img'
                    image = { image }
                    title = { `${dishName} image` }
                />
            </Box>
            <CardContent>
                <Typography
                    align = 'justify'
                    color = 'textSecondary'
                    component = 'p'
                    variant = 'body2'>
                    {instructions}
                </Typography>
            </CardContent>
            {children}
        </CardMUI>
    );
};

CardDetails.propTypes = {
    children:     PropTypes.node,
    imageUrl:     PropTypes.string,
    dishName:     PropTypes.string,
    instructions: PropTypes.string,
};

export default CardDetails;
