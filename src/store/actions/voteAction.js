import * as TYPES from '../action-types';
/**
 * vote模块要派发的行为对象管理
 * voteAction包含多个方法，每个方法执行，都返回要派发的行为对象
 */
//延迟函数，返回promise实例，在指定的时间后成功
const delay = (interval = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
};
const voteAction = {
    // redux-thunk
    sup: () => {
        return async (dispatch) => {
            await delay();
            dispatch({
                type: TYPES.VOTE_SUP
            });
        };
    },
    //redux-promise
    opp: async () => {
        await delay(2000);
        return {
            type: TYPES.VOTE_OPP
        };
    }
};
export default voteAction;
