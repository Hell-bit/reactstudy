import deepClone from '@/utils/deepCopy.js';
const initalState = {
    num: 100,
    info: null
};
export const personalReducer = (state = initalState, action) => {
    state = deepClone(state);
    switch (action.type) {
        case 'PERSONAL_INFO':
            state.info = {};
            break;

        default:
            break;
    }
    return state;
};
