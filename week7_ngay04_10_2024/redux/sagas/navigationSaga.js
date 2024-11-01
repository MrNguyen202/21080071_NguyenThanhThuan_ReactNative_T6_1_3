import { takeLatest } from 'redux-saga/effects';
import { NAVIGATE_TO_DASHBOARD, NAVIGATE_TO_GOBACK } from '../actions/navigationActions';
import { navigate } from '../../navigation/navigationRef';

function* navigateToDashboardSaga(action) {
    const { name } = action.payload;
    navigate('Dashboard', { name });
}

export function* watchNavigation() {
    yield takeLatest(NAVIGATE_TO_DASHBOARD, navigateToDashboardSaga);
}
