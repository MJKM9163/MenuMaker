import { call, put } from 'redux-saga/effects';

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = 'FAILURE';
    
    return function*(action) {
        try {
            const response = yield call(request, action.payload);
            //console.log(response);
            console.log(response.data);
            console.log(action.payload);
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