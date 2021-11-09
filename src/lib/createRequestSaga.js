import { call, put } from 'redux-saga/effects';
//import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = 'maker/FAILURE';

    return function*(action) {
        try {
            console.log(action)
            const response = yield call(request, action.payload);
            console.log("넘어감")
            console.log(response);
            yield put({
                type: SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            yield put({
                type: FAILURE,
                payload: error,
            });
        }
    };
}