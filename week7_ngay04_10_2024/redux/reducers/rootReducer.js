import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    auth: authReducer,
});

export default rootReducer;
