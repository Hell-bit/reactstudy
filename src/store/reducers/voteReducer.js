import deepClone from '@/utils/deepCopy.js';
import * as actions from '../action-types';
const initalState = {
    supNum: 10,
    oppNum: 5,
    num: 0
};
export const voteReducer = (state = initalState, action) => {
    state = deepClone(state);
    switch (action.type) {
        case actions.VOTE_SUP:
            state.supNum++;
            break;
        case actions.VOTE_OPP:
            state.oppNum++;
            break;
        default:
    }
    return state;
};
