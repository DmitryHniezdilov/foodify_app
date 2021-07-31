import React from 'react';
import {Card as CardMUI, Button, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import {useStyles} from './styles';

const Card = () => {
    const classes = useStyles();

    return (
        <Grid
            item>
            <CardMUI className = { classes.card }>
                <CardActionArea>
                    <CardMedia
                        alt = 'Meal image'
                        component = 'img'
                        height = '235'
                        image = '/static/images/cards/contemplative-reptile.jpg'
                        title = 'Meal image'
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            component = 'h2'
                            variant = 'h5'>
                            Dish name
                        </Typography>
                        <Typography
                            color = 'textSecondary'
                            component = 'p'
                            variant = 'body2'>
                            {/* eslint-disable-next-line max-len */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehende
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className = { classes.cardActions }>
                    <Button
                        color = 'primary'
                        size = 'small'>
                        Skip
                    </Button>
                    <Button
                        color = 'primary'
                        size = 'small'>
                        Like
                    </Button>
                </CardActions>
            </CardMUI>
        </Grid>
    );
};

export default Card;
