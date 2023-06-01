import { Button } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
/**
 * useLayoutEffect与useEffect的区别
 *  1.对于useEffect来讲 第一次真实DOM已经渲染，当组件更新时会重新渲染真实DOM，所以频繁切换时会出现页面闪烁
 *  2.对于useLayoutEffect来讲  第一次真实DOM还未渲染，遇到callBack中修改状态，视图更新，会创建出新的虚拟DOM
 * 然后和上一次的虚拟DOM合并，再一起渲染为真实DOM
 *
 */

const queryData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([10, 20, 30]);
        }, 1000);
    });
};
const Demo = () => {
    let [num, setNum] = useState(0);
    useEffect(() => {
        if (num === 0) {
            setNum(10);
        }
    }, [num]);
    useLayoutEffect(() => {
        if (num === 0) {
            setNum(10);
        }
    }, [num]);
    const handle = () => {
        setNum(0);
    };
    return (
        <div>
            <h1>React Hooks</h1>
            <div className='demo'>
                <span
                    className='num'
                    style={{
                        color: num === 0 ? 'red' : 'green'
                    }}
                >
                    {num}
                </span>
                <Button type='primary' size='small' onClick={handle}>
                    新增
                </Button>
            </div>
        </div>
    );
};
export default Demo;
