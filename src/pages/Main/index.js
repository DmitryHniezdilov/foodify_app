import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardActions, Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PageLayout from '../../components/PageLayout';
import Card from '../../components/Card';
import * as action from '../../redux/actions/general';
import {useStyles} from './styles';

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { recipe } = useSelector((state) => state.general);
    const { strMeal, strMealThumb, strInstructions } = recipe;
    // const normalizeInstructions -- cut strInstructions
    const [ favour, setFavour ] = useState(false);

    const skipAction = () => dispatch(action.setRecipe());

    const likeAction = () => {
        setFavour(!favour);
        // dispatch(action.setRecipe());
    };

    return (
        <PageLayout>
            <Grid
                container
                alignItems = 'center'
                justifyContent = 'center'
                spacing = { 4 }>
                <Grid
                    item>
                    <Card
                        dishName = { strMeal }
                        imageUrl = { strMealThumb }
                        instructions = { strInstructions }>
                        <CardActions className = { classes.cardActions }>
                            <Button
                                color = 'primary'
                                endIcon = { <SendIcon/> }
                                size = 'small'
                                onClick = { skipAction }>
                                Skip
                            </Button>
                            <Button
                                color = { favour ? 'secondary' : 'primary' }
                                endIcon = { favour ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
                                size = 'small'
                                onClick = { likeAction }>
                                Like
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default Main;
