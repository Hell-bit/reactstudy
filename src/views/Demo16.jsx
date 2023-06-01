import { Button } from 'antd';
import React, { useMemo, useState } from 'react';
/**
 * useMemo 构建缓存优化方案
 * 函数组件的每次更新都是把函数组件重新执行，产生一个新的闭包，内部的代码也要重新执行一遍，
 * 此时函数中的某些计算类型公共逻辑没必要重新执行，在函数组件重新执行时，如果依赖的状态值没有发生变化，那我们的操作逻辑也没必要执行
 *
 * useMemo(callBack,[args...])  组件第一次渲染 callBack会执行，当依赖的值发生改变callBack也会执行，无变化不执行
 * useMemo是一个优化的Hook函数，当函数组件中有消耗性能的计算属性，则尽可能用useMemo将属性缓存起来
 */
const Demo = () => {
    let [sup, setSup] = useState(10);
    let [opp, setOpp] = useState(5);
    let [x, setx] = useState(0);
    //如果依赖的状态值没有发生变化，那我们的操作逻辑也没必要执行
    // let total = sup + opp;
    // let ratio = '';
    // if (total > 0) ratio = ((sup / total) * 100).toFixed(2) + '%';
    //替换
    let ratio = useMemo(() => {
        console.log('111');
        let total = sup + opp;
        let ratio = '';
        if (total > 0) ratio = ((sup / total) * 100).toFixed(2) + '%';
        return ratio;
    }, [sup, opp]);
    const handle = () => {
        setSup(sup + 1);
    };
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
                <div
                    style={{
                        fontSize: '20px',
                        lineHeight: '20px'
                    }}
                >
                    支持人数：{sup}
                </div>
                <div
                    style={{
                        fontSize: '20px',
                        lineHeight: '20px',
                        margin: '10px 0'
                    }}
                >
                    反对人数：{opp}
                </div>
                <div
                    style={{
                        fontSize: '20px',
                        lineHeight: '20px',
                        margin: '10px 0'
                    }}
                >
                    支持比率：{ratio}
                </div>
                <p>{x}</p>
                <div className='footer'>
                    <Button type='primary' size='small' onClick={handle}>
                        新增
                    </Button>
                    <Button type='primary' size='small' danger onClick={() => setOpp(opp + 1)}>
                        反对
                    </Button>
                    <Button type='default' size='small' onClick={() => setx(x + 1)}>
                        干点别的事
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Demo;
