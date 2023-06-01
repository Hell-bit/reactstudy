import { Button } from 'antd';
import React, { useCallback, useState } from 'react';
/**
 * useCallback
 * 组件第一次渲染，useCallback 执行创建一个函数 ”callback“ ，复制给 handle
 * 组件后续每一次更新，判断依赖的状态是否发生改变，若改变则重新创建函数，赋值给 handle，
 *  如果依赖的状态未发生改变 或者 没有设置依赖状态【】，则handle获取的一直是第一次创建的函数，不会创建新的函数
 * 或者说：基于useCallback 可以始终获取第一次创建函数的堆内存地址
 * useCallback可以保证，函数组件的每一次更新形成新的闭包时，不再把函数组件当中的函数重新创建，每次使用的都是第一次创建的函数
 * React.memo
 */
const Demo = () => {
    let [x, setX] = useState(0);

    const handle = useCallback(() => {
        setX(x + 1);
    }, [x]);
    return (
        <div
            className='box'
            style={{
                width: '600px',
                height: '100%',
                textAlign: 'center',
                margin: '0 auto'
            }}
        >
            <h1>React Hooks</h1>
            <div className='demo'>
                <p>{x}</p>
                <div className='footer'>
                    <Button type='primary' size='small' onClick={handle}>
                        新增
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Demo;
