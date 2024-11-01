import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure, LOGIN_REQUEST } from '../actions/authActions';
import { navigate } from '../../navigation/navigationRef';
import { addUser, getAllUser } from '../../api/userAPI';

function* loginSaga(action) {
    const { name } = action.payload;
    
    try {
        // Lấy danh sách người dùng
        const users = yield call(getAllUser);
        const user = users.find((u) => u.name === name);

        if (user) {
            // Nếu tên người dùng đã tồn tại, đăng nhập thành công
            yield put(loginSuccess(user));
        } else {
            // Nếu không, thêm người dùng mới
            const newUser = yield call(addUser, name);
            yield put(loginSuccess(newUser));
        }

        // Điều hướng đến Dashboard
        yield call(navigate, 'Dashboard', { name });
    } catch (error) {
        yield put(loginFailure('Failed to log in'));
    }
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}
