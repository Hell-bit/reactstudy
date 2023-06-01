// import { createStore } from 'redux';
import { createStore } from '@/myredux.js';

let initialState = {
    supNum: 10,
    oppNum: 5
};
/**
 * 修改容器中的公共状态
 * @param {*} state
 */
const reducer = (state = initialState, action) => {
    //store:存储在store容器中的公共状态「最开始没有的时候赋值为初始值」
    //action:每一次基于dispatch派发的时候传递进来的行为对象，要求必须具备type属性，存储派发行为标识
    //为了避免直接操作state中的状态，我们需要先克隆容器状态
    state = { ...state };
    //基于派发的不同行为标识修改store中的公共状态
    switch (action.type) {
        case 'VOTE_SUP':
            state.supNum++;
            break;
        case 'VOTE_OPP':
            state.oppNum++;
            break;
        default:
            break;
    }
    //return 回正题替换state中的内容
    return state;
};
/**
 * 创建公共容器
 */
const store = createStore(reducer);
export default store;
