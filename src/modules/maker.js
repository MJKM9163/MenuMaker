import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as menuAPI from '../lib/api/maker';

const MENU_RICE_MAKER = 'maker/MENU_RICE_MAKER';
const MENU_MAIN_MAKER = 'maker/MENU_MAIN_MAKER';
const MENU_SIDE_MAKER = 'maker/MENU_SIDE_MAKER';
const MENU_RICE_MAKER_SUCCESS = 'maker/MENU_RICE_MAKER_SUCCESS';
const MENU_MAIN_MAKER_SUCCESS = 'maker/MENU_MAIN_MAKER_SUCCESS';
const MENU_SIDE_MAKER_SUCCESS = 'maker/MENU_SIDE_MAKER_SUCCESS';
const FAILURE = 'maker/FAILURE';
// const MENU_RICE_MAKER_FAILURE = 'maker/MENU_RICE_MAKER_FAILURE';
// const MENU_MAIN_MAKER_FAILURE = 'maker/MENU_MAIN_MAKER_FAILURE';
// const MENU_SIDE_MAKER_FAILURE = 'maker/MENU_SIDE_MAKER_FAILURE';

export const makerRice = createAction(
    MENU_RICE_MAKER, (number) => (number),
)
export const makerMain = createAction(
    MENU_MAIN_MAKER, (number) => (number),
)
export const makerSide = createAction(
    MENU_SIDE_MAKER, (number) => (number),
)

const initialState = {
    rices: [],
    mains: [],
    sides: [],
    error: null,
};

const riceSaga = createRequestSaga(MENU_RICE_MAKER, menuAPI.riceListCall);
const mainSaga = createRequestSaga(MENU_MAIN_MAKER, menuAPI.mainListCall);
const sideSaga = createRequestSaga(MENU_SIDE_MAKER, menuAPI.sideListCall);
export function* menuSaga() {
    yield takeLatest(MENU_RICE_MAKER, riceSaga);
    yield takeLatest(MENU_MAIN_MAKER, mainSaga);
    yield takeLatest(MENU_SIDE_MAKER, sideSaga);
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
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
);

export default maker;