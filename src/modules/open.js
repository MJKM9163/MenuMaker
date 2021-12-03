import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as openAPI from '../lib/api/open';

const PRICE = 'price/PRICE';
const PRICE_SUCCESS = 'price/PRICE_SUCCESS';

const FAILURE = 'FAILURE';

export const priceAPICall = createAction(
    PRICE,
);

const initialState = {
    data: null,
    error: null,
};

const dataSaga = createRequestSaga(PRICE, openAPI.priceAPI);
export function* openSaga() {
    yield takeLatest(PRICE, dataSaga);
};

const open = handleActions(
    {
        [PRICE_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            data,
        }),
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
);

export default open;