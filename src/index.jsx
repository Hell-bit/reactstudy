import React from 'react';
import ReactDOM from 'react-dom/client';
// import Dialog from '@/components/Dialog';
// import Demo from '@/views/Demo1';
// import Demo from '@/views/Demo2';
// import Demo from '@/views/Demo3';
// import Demo from '@/views/Demo4';
// import Demo from '@/views/Demo5';
// import Demo from '@/views/Demo6';
// import Demo from '@/views/Demo7';
// import Demo from '@/views/Demo8';
// import Demo from '@/views/Demo9';
// import Demo from '@/views/Demo10';
// import Demo from '@/views/Demo11';
// import Demo from '@/views/Demo12';
// import Demo from '@/views/Demo13';
// import Demo from '@/views/Demo14';
// import Demo from '@/views/Demo15';
// import Demo from '@/views/Demo16';
// import Demo from '@/views/Demo17';
// import Demo from '@/views/Demo18';
// import DemoClass from '@/views/Demo19';
// import DemoContext from '@/views/Demo20';
// import Demo from '@/views/Demo21';
import Demo from '@/views/redux/Demo1';
//redux
import store from '@/store';
//基于上下文对象方式传递store
// import ThemeContext from './ThemeContext';
// import { Provider } from 'react-redux';
import { Provider } from './myReactRedux.js';

// import App from '@/App';
// import Task from '@/views/Task';
//使用antd组件库
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.less';
// react 严格模式  <React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        {/* <App /> */}
        {/* <Task /> */}
        {/* <ThemeContext.Provider value={{ store }}>
            <Demo />
        </ThemeContext.Provider> */}
        {/* <DemoClass /> */}
        {/* <DemoContext /> */}
        <Provider store={store}>
            <Demo />
        </Provider>
    </ConfigProvider>

    // <Demo />

    // <div>
    //     <Demo title='我是标题' data={[100, 200]} className='box' style={{ fontSize: '20px' }}>
    //         <span>页眉</span>
    //         <span>页脚</span>
    //     </Demo>

    //     <Dialog title='在线提醒' content='我是一串提醒字符串'>
    //         <button>确定</button>
    //         <button>取消</button>
    //     </Dialog>
    //     <Dialog content='我是②串提醒字符串'></Dialog>
    //     <Demo title='你支持React登顶吗？' />
    // </div>
);

// fetch('/api/subscriptions/recommended_collections')
//     .then((response) => response.json())
//     .then((value) => {
//         console.log(value);
//     });
// fetch('/zhi/news/latest')
//     .then((response) => response.json())
//     .then((value) => {
//         console.log(value);
//     });
