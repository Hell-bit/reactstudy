import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
/**
 * useEffect 在函数组件中使用生命周期函数
 * useEffect(callBack):
 *  1.第一次渲染完毕执行callBack，等价于componentDidMount
 *  2.每次组件更新完毕后，也会执行callBack，等价于componentDidUpdate
 * useEffect(callBack,[]):
 *  1.传递第二个参数【】 后，当参数无值时，只会在第一次渲染后执行，组件更新不再执行 类似于 componentDidMount
 *  useEffect(() => {   第一次渲染完毕回执行callBack，当依赖的状态（或者多个依赖状态中的一个）发生改变，也会触发callBack
        console.log('@3', num); 但是当依赖状态没有发生改变，组件更新时不会调用callBack
    }, [num,x...]);
    useEffect(() => {  如果返回一个函数，则会在组件释放的时候执行， 如果组件更新，会把上一次返回的函数执行
        return () => {
            //获取上一次状态值
            console.log('@4', num);
        };
    });
 */
const Demo = () => {
    let [num, setNum] = useState(0);
    let [x, setX] = useState(100);
    useEffect(() => {
        console.log('@1', num);
    });
    useEffect(() => {
        console.log('@2', num);
    }, []);
    useEffect(() => {
        console.log('@3', num);
    }, [num]);
    useEffect(() => {
        return () => {
            //获取上一次状态值
            console.log('@4', num);
        };
    });
    const handle = () => {
        setNum(num + 1);
    };
    return (
        <div>
            <h1>React Hooks</h1>
            <div className='demo'>
                <span className='num'>{num}</span>
                <Button type='primary' size='small' onClick={handle}>
                    新增
                </Button>
            </div>
        </div>
    );
};
export default Demo;
