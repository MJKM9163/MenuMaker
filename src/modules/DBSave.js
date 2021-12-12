import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as saveAPI from '../lib/api/DBSave';
import { takeLatest } from 'redux-saga/effects';

const DB_SAVE = 'save/DB_SAVE';
const DB_SAVE_SUCCESS = 'save/DB_SAVE_SUCCESS';
const DB_SAVE_FAILURE = 'save/DB_SAVE_FAILURE';
const PRICE_SAVE = 'save/PRICE_SAVE';
const PRICE_SAVE_SUCCESS = 'save/PRICE_SAVE_SUCCESS';
const PRICE_SAVE_FAILURE = 'save/PRICE_SAVE_FAILURE';
const CHANGE_FIELD = 'save/CHANGE_FIELD';

export const dbSave = createAction(
    DB_SAVE, ({ menuname, main, description, main_ingredient, main_ingredient_weight, ingredientArray,
        ingredientWeightArray, category, cook_type, sauce_base, country }) => ({
        menuname,
        main,
        description,
        main_ingredient,
        main_ingredient_weight,
        ingredientArray,
        ingredientWeightArray,
        category,
        cook_type,
        sauce_base,
        country,
    })
);

export const change = createAction(
    CHANGE_FIELD,
);

export const priceSave = createAction(
    PRICE_SAVE,
);


const initialState = {
    menuname: null,
    main: null,
    description: null,
    main_ingredient: null,
    main_ingredient_weight: null,
    ingredient: null,
    ingredient_weight: null,
    category: null,
    cook_type: null,
    sauce_base: null,
    country: null,
};

const saveSaga = createRequestSaga(DB_SAVE, saveAPI.dbmenuSave);
const priceSaga = createRequestSaga(PRICE_SAVE, saveAPI.priceSave);
export function* dbSaveSaga() {
    yield takeLatest(DB_SAVE, saveSaga);
    yield takeLatest(PRICE_SAVE, priceSaga);
};

const DBSave = handleActions (
    {
        [DB_SAVE_SUCCESS]: state => initialState,
        [DB_SAVE_FAILURE]: (state, { payload }) => ({
            ...state,
            menuname: null,
            main: null,
            description: null,
            main_ingredient: null,
            main_ingredient_weight: null,
            ingredient: null,
            ingredient_weight: null,
            category: null,
            cook_type: null,
            sauce_base: null,
            country: null
        }),
        [CHANGE_FIELD]: (state, { payload: { form, value } }) => ({
            ...state,
            [form]: value,
        }),
        [PRICE_SAVE_SUCCESS]: state => initialState,
        [PRICE_SAVE_FAILURE]: state => initialState,
    },
    initialState,
);

export default DBSave;