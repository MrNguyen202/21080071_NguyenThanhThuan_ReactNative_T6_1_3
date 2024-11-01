export const NAVIGATE_TO_DASHBOARD = 'NAVIGATE_TO_DASHBOARD';

export const navigateToDashboard = (name) => ({
    type: NAVIGATE_TO_DASHBOARD,
    payload: { name },
});


