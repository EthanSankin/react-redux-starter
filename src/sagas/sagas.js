import "regenerator-runtime/runtime";
import { takeEvery, call } from 'redux-saga/effects'
import { ADD_TO_COUNTER } from '../actions';

export function* rootSaga() {
    yield takeEvery(ADD_TO_COUNTER, logSaga)
}

function* logSaga(action) {
    yield call(console.log, `Logging action ${action}`)
}