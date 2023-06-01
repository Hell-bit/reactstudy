import { Button } from 'antd';
import React, { useState } from 'react';
/**
 * useState 使用状态管理
 * useEffect 使用周期函数
 * useContext 使用上下文信息
 * useReducer useState的替代方案，借鉴redux处理思想，管理更复杂的逻辑和状态
 * useCallback 构建缓存优化方案
 * useMemo 构建缓存优化方案
 * useRef 使用ref获取元素DOM
 * useImperativeHandle  配合forwordRef(ref转发)一起使用
 * useLayoutEffect 与useEffect相同，但是会在所有DOM变更之后，同步调用effect
 * 1. useState React Hooks函数组件之一，目的是在函数组件中使用状态管理，并且后期基于状态的修改，可以让组件更新
 *    执行useState(0) 返回结果是一个数组 [状态值，修改状态的方法]
 *      +num变量存储的：获取变量的值
 *      +setNum存储的：修改状态的方法
 *      执行setNum(value)方法 ，修改状态值为value，通知
 * 函数组件不需要做this 的处理
 * 函数组件的每一个渲染或更新，都是把函数重新执行，产生一个全新的私有上下文（闭包）
 */
const Demo = () => {
    console.log(useState(0));
    let [num, setNum] = useState(0);
    const handle = () => {
        setNum(num + 10);
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
