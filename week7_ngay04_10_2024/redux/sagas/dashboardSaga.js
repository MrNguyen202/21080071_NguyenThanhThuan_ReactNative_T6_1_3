import { call, put, takeLatest } from 'redux-saga/effects';
import { findUserByName, updateUserById, findUserById } from '../../api/userAPI';
import {
    FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,
    UPDATE_USER_JOB_REQUEST, UPDATE_USER_JOB_SUCCESS, UPDATE_USER_JOB_FAILURE,
    DELETE_USER_JOB_REQUEST, DELETE_USER_JOB_SUCCESS, DELETE_USER_JOB_FAILURE, ADD_NOTE
} from '../actions/dashboardActions';

import { ADD_JOB_REQUEST, addJobSuccess, addJobFailure } from '../actions/dashboardActions';
import { navigate } from '../../navigation/navigationRef';


function* fetchUserSaga(action) {
    try {
        const data = yield call(findUserByName, action.payload);
        yield put({ type: FETCH_USER_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: FETCH_USER_FAILURE, error });
    }
}


function* updateUserJobSaga(action) {
    try {
        const { id } = action.payload;
        yield call(updateUserById, id, action.payload);
        yield put({ type: UPDATE_USER_JOB_SUCCESS });
        yield put({ type: FETCH_USER_REQUEST, payload: action.payload.name });  // reload user
    } catch (error) {
        yield put({ type: UPDATE_USER_JOB_FAILURE, error });
    }
}

function* deleteUserJobSaga(action) {
    try {
        const { userId, jobIndex } = action.payload;
        const user = yield call(findUserById, userId);
        user.job.splice(jobIndex, 1);  // Remove job at index
        yield call(updateUserById, userId, user);
        yield put({ type: DELETE_USER_JOB_SUCCESS });
        yield put({ type: FETCH_USER_REQUEST, payload: user.name });  // reload user
    } catch (error) {
        yield put({ type: DELETE_USER_JOB_FAILURE, error });
    }
}

function* handleAddJob(action) {
    const { userId, newJob } = action.payload;

    try {
        // Lấy thông tin người dùng hiện tại (bạn cần có một hàm để lấy thông tin người dùng)
        const user = yield call(findUserById, userId);

        // Thêm công việc mới vào danh sách công việc
        user.job.push(newJob);

        // Cập nhật người dùng
        const updatedUser = yield call(updateUserById, userId, user);
        yield put(addJobSuccess(updatedUser));
    } catch (error) {
        yield put(addJobFailure(error.message));
    }
}

function* navigateToAddNoteSaga(action) {
    const { payload } = action;
    // Sử dụng `call` để gọi navigate
    yield call(navigate, 'AddNote', { data: payload });
}



export function* watchDashboardSaga() {
    yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
    yield takeLatest(UPDATE_USER_JOB_REQUEST, updateUserJobSaga);
    yield takeLatest(DELETE_USER_JOB_REQUEST, deleteUserJobSaga);
    yield takeLatest(ADD_JOB_REQUEST, handleAddJob);
    yield takeLatest(ADD_NOTE, navigateToAddNoteSaga);
}
