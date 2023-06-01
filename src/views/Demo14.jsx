import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
/**
 * useRef
 *  useRef在每一次组件更新的时候不会再次创建新的ref对象
 *  React.createRef() 在组件更新的时候会重新创建新的ref对象，比较浪费性能
 */

const Demo = () => {
    let [num, setNum] = useState(0);
    /**
     * 基于函数的方式
     */
    let box;
    /**
     * 基于React.创建ref对象
     */
    // box = React.createRef();
    //基于useRef 获取
    box = useRef(null);
    useEffect(() => {
        console.log(box);
        console.log(box.current);
    }, []);
    const handle = () => {
        setNum(num + 1);
    };
    return (
        <div>
            <h1>React Hooks</h1>
            <div className='demo'>
                <span
                    // ref={(x) => (box = x)}
                    ref={box}
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
