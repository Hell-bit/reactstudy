/** 合并各个模块的reducer 最后创建出总的reducer
 * combineReducers 合并各个组件的reducer对象
 * 此时容器的公共状态，会按照我们设置的成员名字，分模块管理状态
 * state = {
 *    vote:{
 *      supNum:10,
 *      oppNum:0,
 *      num:0
 *    },
 *    personal:{
 *       num:100,
 *       info:{}
 *    }
 * }
 */
import { combineReducers } from 'redux';
// import myCombineReducers from '../myCombineReducers';
import { personalReducer } from './personalReducer';
import { voteReducer } from './voteReducer';
const reducer = combineReducers({
    vote: voteReducer,
    personal: personalReducer
});
export default reducer;
