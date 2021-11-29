import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as openAPI from '../lib/api/open';

const OPEN = 'maker/OPEN';
const OPEN_SUCCESS = 'maker/OPEN_SUCCESS';

const FAILURE = 'FAILURE';

export const openAPICall = createAction(
    OPEN,
);

const initialState = {
    data: null,
    error: null,
};

const dataSaga = createRequestSaga(OPEN, openAPI.openAPI);
export function* openSaga() {
    yield takeLatest(OPEN, dataSaga);
};

const open = handleActions(
    {
        [OPEN_SUCCESS]: (state, { payload: data }) => ({
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