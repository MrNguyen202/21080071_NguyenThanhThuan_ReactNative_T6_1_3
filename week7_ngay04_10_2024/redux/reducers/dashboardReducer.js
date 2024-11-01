const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
        case 'UPDATE_USER_JOB_REQUEST':
        case 'DELETE_USER_JOB_REQUEST':
            return { ...state, isLoading: true, error: null };
        case 'FETCH_USER_SUCCESS':
            return { ...state, isLoading: false, user: action.payload };
        case 'FETCH_USER_FAILURE':
        case 'UPDATE_USER_JOB_FAILURE':
        case 'DELETE_USER_JOB_FAILURE':
            return { ...state, isLoading: false, error: action.error };
        case 'UPDATE_USER_JOB_SUCCESS':
        case 'DELETE_USER_JOB_SUCCESS':
            return { ...state, isLoading: false };
        case 'ADD_JOB_REQUEST':
            return { ...state, isLoading: true, error: null };
        case 'ADD_JOB_SUCCESS':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
                error: null,
            };
        case 'ADD_JOB_FAILURE':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default dashboardReducer;
