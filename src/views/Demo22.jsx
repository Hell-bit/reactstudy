import React from 'react';
/*
 * React高阶组件：利用JS中的闭包实现组件代理
 */
const Demo = (props) => {
    console.log(props);
    return <div className='demo'>我是DEMO</div>;
};
const ProxyTest = (Component) => {
    return function HOC(props) {
        return <Component {...props} />;
    };
};
export default ProxyTest(Demo);
