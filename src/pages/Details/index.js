import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { CardActions, Button} from '@material-ui/core';
import PageLayout from '../../components/PageLayout';
import CardDetails from '../../components/CardDetails';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import * as action from '../../redux/actions/general';
import {useStyles} from './styles';

const Details = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { recipeFavourList, recipe } = useSelector((state) => state.general);
    const history = useHistory();
    const { params } = useRouteMatch();
    const {id} = params;

    const findItem = recipeFavourList.find((item) => item.idMeal === id);
    const { idMeal, strMeal, strMealThumb, strInstructions } = findItem || recipe;

    const handlerAction = () => {
        const delFromRecipeFavourList = recipeFavourList.filter((item) => item.idMeal !== idMeal);
        dispatch(action.setFavourList(findItem ? delFromRecipeFavourList : [ ...recipeFavourList, recipe ]));
        findItem && history.push('/');
    };

    return (
        <PageLayout>
            <CardDetails
                dishName = { strMeal }
                imageUrl = { strMealThumb }
                instructions = { strInstructions }>
                <CardActions className = { classes.cardDetailsActions }>
                    <Button
                        color = { !findItem ? 'primary' : 'secondary' }
                        endIcon = { !findItem ? <FavoriteBorderIcon/> : <DeleteIcon/> }
                        size = 'small'
                        onClick = { handlerAction }>
                        {!findItem ? 'Like' : 'Delete'}
                    </Button>
                </CardActions>
            </CardDetails>
        </PageLayout>
    );
};

export default Details;
