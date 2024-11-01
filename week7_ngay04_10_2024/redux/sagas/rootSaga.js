import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './authSaga';
import { watchNavigation } from './navigationSaga';
import { watchDashboardSaga } from './dashboardSaga'

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchNavigation(),
        watchDashboardSaga(),
    ]);
}
