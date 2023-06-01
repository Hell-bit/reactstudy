import { Button } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
/**
 * useEffect模拟处理请求数据
 * useEffect只能单独执行，不能放在条件判断或者循环中
 * useEffect如果设置返回值，则返回值必须是一个函数 「代表组件销毁时触发」
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
    // useEffect(async () => {   //语法错误
    //     let data = await queryData();
    //     console.log(data);
    // }, []);
    useEffect(() => {
        queryData().then((data) => {
            console.log(data);
        });
    }, []);
    useEffect(() => {
        const next = async () => {
            let data = await queryData();
            console.log(data);
        };
        next();
    }, []);
    useEffect(() => {
        if (num > 5) {
            console.log('ok');
        }
    }, [num]);
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
