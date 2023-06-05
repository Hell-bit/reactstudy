/* TASK 切片*/
import { createSlice } from '@reduxjs/toolkit';
import { getTaskList } from '@/api/index.js';

const taskSlice = createSlice({
    name: 'task', //设置切片名字
    //设置切片初始状态
    initialState: {
        taskList: null
    },
    //编写不同业务逻辑，对公共状态进行更改
    reducers: {
        getAllTaskList(state, action) {
            //state redux中的公共状态「基于immer库管理，无需克隆」
            //action 派发的行为对象，无需考虑行为标识，传递的其他信息都是以 action.payload来接收
            state.taskList = action.payload;
        },
        removeTask(state, { payload }) {
            let taskList = state.taskList;
            if (!Array.isArray(taskList)) return;
            state.taskList = taskList.filter((item) => {
                return +item.id !== +payload;
            });
        },
        updateTask(state, { payload }) {
            let taskList = state.taskList;
            if (!Array.isArray(taskList)) return;
            state.taskList = taskList.map((item) => {
                if (+item.id === +payload) {
                    item.state = 2;
                    item.complate = new Date().toLocaleString('zh-CN');
                }
                return item;
            });
        }
    }
});
//从切片中获取actionCreator
export let { getAllTaskList, removeTask, updateTask } = taskSlice.actions;
//实现基于中间件的异步派发
export const getAllTaskListAsync = () => {
    return async (dispatch) => {
        let list = [];
        try {
            let result = await getTaskList(0);
            if (+result.code === 0) {
                list = result.list;
            }
        } catch (error) {}
        dispatch(getAllTaskList(list));
    };
};
export default taskSlice.reducer;
