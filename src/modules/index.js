import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import maker, { menuSaga } from './maker';
import DBSave, { dbSaveSaga } from './DBSave';
import setting from './setting';

const rootReducer = combineReducers({
    maker,
    DBSave,
    setting
});

export function* rootSaga() {
    yield all([dbSaveSaga(), menuSaga()]);
};

export default rootReducer;