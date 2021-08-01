import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {Modal, Backdrop, Fade, Typography, Box, TextField, Button, Paper} from '@material-ui/core';
import * as action from '../../redux/actions/general';
import {localStorageHelper} from '../../utils';
import {useStyles} from './styles';

const AddDishModal = () => {
    const classes = useStyles();
    const { handleSubmit, errors, control } = useForm();
    const dispatch = useDispatch();
    const { isOpenModal, recipeFavourList } = useSelector((state) => state.general);

    const handleClose = () => {
        dispatch(action.setClosedModal());
    };

    const onSubmit = ({title, text}) => {
        const customDish = {
            idMeal:          String(Date.now()),
            strMeal:         title,
            strInstructions: text,
        };
        dispatch(action.setCustomDish([ ...recipeFavourList, customDish ]));
        localStorageHelper.store([ ...recipeFavourList, customDish ]);
        handleClose();
    };

    return (
        <Modal
            closeAfterTransition
            BackdropComponent = { Backdrop }
            BackdropProps = {{
                timeout: 500,
            }}
            className = { classes.modal }
            open = { isOpenModal }
            onClose = { handleClose }>
            <Fade in = { isOpenModal }>
                <Paper className = { classes.paper }>
                    <Typography
                        component = 'h1'
                        variant = 'h5'>
                        Add custom dish
                    </Typography>
                    <form
                        className = { classes.form }
                        onSubmit = { handleSubmit(onSubmit) }>
                        <Box mb = { 2 }>
                            <Controller
                                as = {
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        error = { !!errors?.title?.type }
                                        helperText = { errors?.title?.message }
                                        id = 'title'
                                        label = 'Title'
                                        type = 'text'
                                        variant = 'outlined'
                                    />
                                }
                                control = { control }
                                defaultValue = ''
                                name = 'title'
                                rules = {{
                                    required: {
                                        value:   true,
                                        message: 'Title is required'},
                                    minLength: {
                                        value:   5,
                                        message: 'Title is too short'},
                                }}
                            />
                        </Box>
                        <Box>
                            <Controller
                                as = {
                                    <TextField
                                        fullWidth
                                        multiline
                                        error = { !!errors?.text?.type }
                                        helperText = { errors?.text?.message }
                                        id = 'text'
                                        label = 'Text'
                                        rows = { 4 }
                                        type = 'text'
                                        variant = 'outlined'
                                    />
                                }
                                control = { control }
                                defaultValue = ''
                                name = 'text'
                                rules = {{
                                    required: {
                                        value:   true,
                                        message: 'Text is required'},
                                    minLength: {
                                        value:   20,
                                        message: 'Text is too short'},
                                }}
                            />
                        </Box>
                        <Button
                            fullWidth
                            className = { classes.submit }
                            color = 'primary'
                            type = 'submit'
                            variant = 'contained'>
                            Add dish
                        </Button>
                    </form>
                </Paper>
            </Fade>
        </Modal>
    );
};

export default AddDishModal;
