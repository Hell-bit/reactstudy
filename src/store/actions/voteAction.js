import * as TYPES from '../action-types';
/**
 * vote模块要派发的行为对象管理
 * voteAction包含多个方法，每个方法执行，都返回要派发的行为对象
 */
const voteAction = {
    sup: () => {
        return {
            type: TYPES.VOTE_SUP
        };
    },
    opp: () => {
        return {
            type: TYPES.VOTE_OPP
        };
    }
};
export default voteAction;
