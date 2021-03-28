import {put, takeEvery, all, call, take} from 'redux-saga/effects'
import {getUsers} from './api'

const delay = ms => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    console.log('Hello sagas');
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        logUsers()
    ])
}

export function* logUsers() {
    const data = yield call(getUsers, '/users')
    yield put({type: 'LOG_USERS', payload: data})
    console.log(data);
}

export function* watchlogUsers() {
take('LOG_USERS', logUsers)
}

