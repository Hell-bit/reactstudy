import { Button } from 'antd';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
/**
 * useRef
 *  useRef在每一次组件更新的时候不会再次创建新的ref对象
 *  React.createRef() 在组件更新的时候会重新创建新的ref对象，比较浪费性能
 * 函数子组件内部，可以有自己的方法和状态，可基于forwardRef实现ref的同时，通过useImperativeHandle实现属性和方法的转发
 */
//来组建基于ref实例，获取子组件的某个属性
// class Child extends React.Component {
//     state = {
//         x: 10
//     };
//     render() {
//         return <div className='child_box'>{this.state.x}</div>;
//     }
// }
//函数组件需要用函数转发的方式获取子组件内部的某个元素
const Child = React.forwardRef((props, ref) => {
    console.log(ref);
    let [x, setX] = useState(10);
    const submit = () => {};
    useImperativeHandle(ref, () => {
        return {
            x,
            submit
        };
    });
    return (
        <div className='child_box' ref={ref}>
            {x}
        </div>
    );
});
const Demo = () => {
    let x = useRef(null);
    useEffect(() => {
        console.log(x.current);
    }, []);
    return (
        <div>
            <h1>React Hooks</h1>
            <div className='demo'>
                <Child ref={x} />
            </div>
        </div>
    );
};
export default Demo;
