import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as saveAPI from '../lib/api/DBSave';
import { takeLatest } from 'redux-saga/effects';

const DB_SAVE = 'save/DB_SAVE';
const DB_SAVE_SUCCESS = 'save/DB_SAVE_SUCCESS';
const DB_SAVE_FAILURE = 'save/DB_SAVE_FAILURE';
const CHANGE_FIELD = 'save/CHANGE_FIELD';

export const dbSave = createAction(
    DB_SAVE, ({ menuname, main, description, main_ingredient, ingredient,
                category, cook_type, sauce_base }) => ({
        menuname,
        main,
        description,
        main_ingredient,
        ingredient,
        category,
        cook_type,
        sauce_base,
    })
);

export const change = createAction(
    CHANGE_FIELD,
);


const initialState = {
    menuname: null,
    main: null,
    description: "설명이 없습니다",
    main_ingredient: null,
    ingredient: null,
    category: null,
    cook_type: null,
    sauce_base: null,
};

const saveSaga = createRequestSaga(DB_SAVE, saveAPI.dbmenuSave);
export function* dbSaveSaga() {
    yield takeLatest(DB_SAVE, saveSaga);
};

const DBSave = handleActions (
    {
        [DB_SAVE_SUCCESS]: state => initialState,
        [DB_SAVE_FAILURE]: (state, { payload }) => ({
            ...state,
            menuname: null,
            main: null,
            description: "설명이 없습니다",
            main_ingredient: null,
            ingredient: null,
            category: null,
            cook_type: null,
            sauce_base: null
        }),
        [CHANGE_FIELD]: (state, { payload: { form, value } }) => ({
            ...state,
            [form]: value,
        })
    },
    initialState,
);

export default DBSave;