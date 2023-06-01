import VoteFooter from '../components/VoteFooter';
import VoteMain from '../components/VoteMain';
import React from 'react';
import { useState } from 'react';
import './demo.less';
/**
 *
 * @returns 函数父子组件通信
 */
const Demo = () => {
    let [supNum, setSupNum] = useState(10),
        [oppNum, setOppNum] = useState(0);
    const handleSup = () => {
        setSupNum(supNum + 1);
    };
    const handleOpp = () => {
        setOppNum(oppNum + 1);
    };
    return (
        <div className='vote_func_box'>
            <div className='header'>
                <h2 className='title'>React 函数组件通信</h2>
                <span className='num'>{supNum + oppNum}</span>
            </div>
            <VoteMain sup={supNum} opp={oppNum} />
            <VoteFooter handleSup={handleSup} handleOpp={handleOpp} />
        </div>
    );
};
export default Demo;
