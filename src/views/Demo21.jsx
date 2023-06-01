import VoteFooterContext from '../components/VoteFooterContext';
import VoteMainContext from '../components/VoteMainContext';
import React from 'react';
import { useState } from 'react';
import ThemeContext from '../ThemeContext';
import './demo.less';
/**
 *
 * @returns 函数组件基于上下文实现父子组件通信
 */
const Demo = () => {
    let [supNum, setSupNum] = useState(10),
        [oppNum, setOppNum] = useState(0);
    const change = (type) => {
        if (type === 'sup') {
            setSupNum(supNum + 1);
            return;
        }
        setOppNum(oppNum + 1);
    };
    return (
        <ThemeContext.Provider
            value={{
                sup: supNum,
                opp: oppNum,
                change
            }}
        >
            <div className='vote_func_box'>
                <div className='header'>
                    <h2 className='title'>React 函数组件基于上下文实现组件通信</h2>
                    <span className='num'>{supNum + oppNum}</span>
                </div>
                <VoteMainContext />
                <VoteFooterContext />
            </div>
        </ThemeContext.Provider>
    );
};
export default Demo;
