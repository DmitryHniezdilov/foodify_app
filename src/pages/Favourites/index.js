import React from 'react';
import { useSelector } from 'react-redux';
import {Grid, Typography } from '@material-ui/core';
import PageLayout from '../../components/PageLayout';
import Card from '../../components/Card';
import {useStyles} from './styles';

const Favourites = () => {
    const classes = useStyles();
    const { recipeFavourList } = useSelector((state) => state.general);
    const isRecipeFavourList = recipeFavourList.length === 0;
    const reversedRecipeFavourList = [ ...recipeFavourList ].reverse();

    return (
        <PageLayout isModal>
            <Grid
                container
                justifyContent = 'center'
                spacing = { 4 }>
                { isRecipeFavourList ? (
                    <Typography
                        align = 'center'
                        variant = 'h5'>
                        You don't have a list of your favorite foods. Dishes marked as liked will be displayed on this tab.
                    </Typography>
                ) :   reversedRecipeFavourList.map(({strMeal, strMealThumb, strInstructions, idMeal}) => {
                    return (
                        <Grid
                            item
                            className = { classes.item }
                            key = { idMeal }
                            md = { 4 }
                            sm = { 6 }
                            xs = { 12 }>
                            <Card
                                dishName = { strMeal }
                                id = { idMeal }
                                imageUrl = { strMealThumb }
                                instructions = { strInstructions }>

                            </Card>
                        </Grid>
                    );
                })
                }
            </Grid>
        </PageLayout>
    );
};

export default Favourites;
