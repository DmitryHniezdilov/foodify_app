import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardActions} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PageLayout from '../../components/PageLayout';
import Card from '../../components/Card';
import * as action from '../../redux/actions/general';
import {localStorageHelper} from '../../utils';
import {useStyles} from './styles';

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { recipe, recipeFavourList } = useSelector((state) => state.general);
    const { strMeal, strMealThumb, strInstructions } = recipe;
    const [ favour, setFavour ] = useState(false);

    const skipAction = () => {
        dispatch(action.setRecipe());
        if (favour) {
            setFavour(false);
        }
    };

    const addToRecipeFavourList = () => [ ...recipeFavourList, recipe ];
    const delFromRecipeFavourList = () => [ ...recipeFavourList.slice(0, recipeFavourList.length - 1) ];

    const likeAction = () => {
        dispatch(action.setFavourList(favour ? delFromRecipeFavourList() : addToRecipeFavourList()));
        setFavour(!favour);

        // dispatch(action.deleteThumbFromRecipe(recipe)); // test placeholder - uncomment for view on click to Like button
    };

    useEffect(() => {
        localStorageHelper.store(recipeFavourList);
    }, [ recipeFavourList ]);

    return (
        <PageLayout>
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
        </PageLayout>
    );
};

export default Main;
