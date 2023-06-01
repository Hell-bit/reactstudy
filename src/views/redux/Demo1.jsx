import VoteFooter from '@/components/VoteFooter';
import VoteClassMain from '@/components/VoteClassMain';
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../ThemeContext';
import '@/views/demo.less';
/**
 *
 * @returns
 */
const Demo = () => {
    const { store } = useContext(ThemeContext);
    console.log(store);
    let { vote } = store.getState();
    console.log(store.getState());
    let { supNum, oppNum, num } = vote;
    //组件第一次渲染完毕后，把让组件更新的方法放进store中
    // let [num, setNum] = useState(0);
    // const update = () => {
    //     setNum(num + 1);
    // };
    // useEffect(() => {
    //     //let unsubscribe = store.subscribe(update);让组件更新的方法
    //     //把让组件更新的方法放进事件池中
    //     //返回值unsubscribe方法执行可以把放进事件池中的方法移除
    //     let unsubscribe = store.subscribe(update);
    //     return () => {
    //         unsubscribe();
    //     };
    // }, [num]);
    let [_, setNum] = useState(0);
    useEffect(() => {
        store.subscribe(() => {
            setNum(+new Date());
        });
    }, []);

    return (
        <div className='vote_func_box'>
            <div className='header'>
                <h2 className='title'>React 函数组件通信</h2>
                <span className='num'>{supNum + oppNum}</span>
            </div>
            <VoteClassMain sup={supNum} opp={oppNum} />
            <VoteFooter />
        </div>
    );
};
export default Demo;
