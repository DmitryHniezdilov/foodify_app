import React from 'react';
import PropTypes from 'prop-types';
import {Card as CardMUI, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import {useStyles} from './styles';

const Card = (props) => {
    const {imageUrl, dishName, instructions, children} = props;
    const classes = useStyles();

    return (
        <CardMUI className = { classes.card }>
            <CardActionArea>
                <CardMedia
                    alt = 'Meal image'
                    component = 'img'
                    height = '235'
                    image = { imageUrl }
                    title = { `${dishName} image` }
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        component = 'h2'
                        variant = 'h5'>
                        {dishName}
                    </Typography>
                    <Typography
                        align = 'justify'
                        color = 'textSecondary'
                        component = 'p'
                        variant = 'body2'>
                        {instructions}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {children}
        </CardMUI>
    );
};

Card.propTypes = {
    children:     PropTypes.node,
    imageUrl:     PropTypes.string,
    dishName:     PropTypes.string,
    instructions: PropTypes.string,
};

export default Card;
