const initState = { repos: [], loading: false };

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_REPOS':
            console.log('state', {
                ...state,
                repos: action.payload,
                loading: false,
                error: false,
            });
            return {
                ...state,
                repos: action.payload,
                loading: false,
                error: false,
            };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
