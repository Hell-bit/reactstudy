const initalState = {
    supNum: 10,
    oppNum: 5,
    num: 0
};
export const voteReducer = (state = initalState, action) => {
    state = { ...state };
    switch (action.type) {
        case 'VOTE_SUP':
            state.supNum++;
            break;
        case 'VOTE_OPP':
            state.oppNum++;
            break;
        default:
    }
    return state;
};
