import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as menuAPI from '../lib/api/maker';

const MENU_RICE_MAKER = 'maker/MENU_RICE_MAKER';
const MENU_MAIN_MAKER = 'maker/MENU_MAIN_MAKER';
const MENU_SIDE_MAKER = 'maker/MENU_SIDE_MAKER';
const MENU_SOUP_MAKER = 'maker/MENU_SOUP_MAKER';
const MENU_RICE_MAKER_SUCCESS = 'maker/MENU_RICE_MAKER_SUCCESS';
const MENU_MAIN_MAKER_SUCCESS = 'maker/MENU_MAIN_MAKER_SUCCESS';
const MENU_SIDE_MAKER_SUCCESS = 'maker/MENU_SIDE_MAKER_SUCCESS';
const MENU_SOUP_MAKER_SUCCESS = 'maker/MENU_SOUP_MAKER_SUCCESS';

const FAILURE = 'FAILURE';

export const makerRice = createAction(
    MENU_RICE_MAKER, (number) => (number),
);
export const makerMain = createAction(
    MENU_MAIN_MAKER, (number) => (number),
);
export const makerSide = createAction(
    MENU_SIDE_MAKER, (number) => (number),
);
export const makerSoup = createAction(
    MENU_SOUP_MAKER, (number) => (number),
);

const initialState = {
    rices: null,
    mains: null,
    sides: null,
    soups: null,
    error: null,
};

const riceSaga = createRequestSaga(MENU_RICE_MAKER, menuAPI.riceListCall);
const mainSaga = createRequestSaga(MENU_MAIN_MAKER, menuAPI.mainListCall);
const sideSaga = createRequestSaga(MENU_SIDE_MAKER, menuAPI.sideListCall);
const soupSaga = createRequestSaga(MENU_SOUP_MAKER, menuAPI.soupListCall);
export function* menuSaga() {
    yield takeLatest(MENU_RICE_MAKER, riceSaga);
    yield takeLatest(MENU_MAIN_MAKER, mainSaga);
    yield takeLatest(MENU_SIDE_MAKER, sideSaga);
    yield takeLatest(MENU_SOUP_MAKER, soupSaga);
};

const maker = handleActions(
    {
        [MENU_RICE_MAKER_SUCCESS]: (state, { payload: rices }) => ({
            ...state,
            rices,
        }),
        [MENU_MAIN_MAKER_SUCCESS]: (state, { payload: mains }) => ({
            ...state,
            mains,
        }),
        [MENU_SIDE_MAKER_SUCCESS]: (state, { payload: sides }) => ({
            ...state,
            sides,
        }),
        [MENU_SOUP_MAKER_SUCCESS]: (state, { payload: soups }) => ({
            ...state,
            soups,
        }),
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
);

export default maker;