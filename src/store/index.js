import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import taskSliceReducer from './features/taskSlice';
const store = configureStore({
    //指定reducer
    reducer: {
        //按模块管理切片
        task: taskSliceReducer
    },
    //使用中间件,如果不指定任何中间件，默认集成了redux-thunk
    middleware: [logger, thunk]
});
export default store;
