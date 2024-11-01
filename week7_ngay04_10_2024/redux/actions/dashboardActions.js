export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UPDATE_USER_JOB_REQUEST = 'UPDATE_USER_JOB_REQUEST';
export const UPDATE_USER_JOB_SUCCESS = 'UPDATE_USER_JOB_SUCCESS';
export const UPDATE_USER_JOB_FAILURE = 'UPDATE_USER_JOB_FAILURE';

export const DELETE_USER_JOB_REQUEST = 'DELETE_USER_JOB_REQUEST';
export const DELETE_USER_JOB_SUCCESS = 'DELETE_USER_JOB_SUCCESS';
export const DELETE_USER_JOB_FAILURE = 'DELETE_USER_JOB_FAILURE';

export const ADD_JOB_REQUEST = 'ADD_JOB_REQUEST';
export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const ADD_JOB_FAILURE = 'ADD_JOB_FAILURE';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

// Action Creators
export const fetchUserRequest = (name) => ({
    type: FETCH_USER_REQUEST,
    payload: name,
});

export const updateUserJobRequest = (userId, newJob, jobIndex) => ({
    type: UPDATE_USER_JOB_REQUEST,
    payload: {userId, newJob, jobIndex},
});

export const deleteUserJobRequest = (userId, jobIndex) => ({
    type: DELETE_USER_JOB_REQUEST,
    payload: { userId, jobIndex },
});

export const addJobRequest = (userId, newJob) => ({
    type: ADD_JOB_REQUEST,
    payload: { userId, newJob },
});

export const addJobSuccess = (updatedUser) => ({
    type: ADD_JOB_SUCCESS,
    payload: updatedUser,
});

export const addJobFailure = (error) => ({
    type: ADD_JOB_FAILURE,
    error,
});

//
export const navigateToAddNote = (data) => ({
    type: ADD_NOTE,
    payload: data,
});

export const navigateToUpDateNote = (data, jobIndex) => ({
    type: UPDATE_NOTE,
    payload: {data, jobIndex},
});