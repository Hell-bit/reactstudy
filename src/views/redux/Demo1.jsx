import VoteFooter from '@/components/VoteFooter';
import VoteClassMain from '@/components/VoteClassMain';
import React, { useContext, useEffect, useState } from 'react';
// import ThemeContext from '../../ThemeContext';
// import { connect } from 'react-redux';
import { connect } from '@/myReactRedux';
import '@/views/demo.less';
/**
 *
 * @returns
 */
const Demo = (props) => {
    // const { store } = useContext(ThemeContext);
    // console.log(store);
    // let { vote } = store.getState();
    // console.log(store.getState());
    // let { supNum, oppNum, num } = vote;
    // //组件第一次渲染完毕后，把让组件更新的方法放进store中
    // // let [num, setNum] = useState(0);
    // // const update = () => {
    // //     setNum(num + 1);
    // // };
    // // useEffect(() => {
    // //     //let unsubscribe = store.subscribe(update);让组件更新的方法
    // //     //把让组件更新的方法放进事件池中
    // //     //返回值unsubscribe方法执行可以把放进事件池中的方法移除
    // //     let unsubscribe = store.subscribe(update);
    // //     return () => {
    // //         unsubscribe();
    // //     };
    // // }, [num]);
    // let [_, setNum] = useState(0);
    // useEffect(() => {
    //     store.subscribe(() => {
    //         setNum(+new Date());
    //     });
    // }, []);
    let { supNum, oppNum } = props;
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
export default connect((state) => state.vote)(Demo);
/*
connect(mapStateToProps,mapDispatchToProps)(我们要渲染的组件)
mapStateToProps:可以获取到redux中的公共状态，把需要的状态作为属性传递给组件即可
mapDispatchToProps:把需要派发的任务当做属性传递给组件
Connect((state)=>{
    // state:存储所有的公共状态
    return {
        返回对象中的状态就是作为属性传递给组件的
        supNum: state.vote.supNum,
        info: state.personal.info
        ...
    }
}，dispatch=>{
    return {
        //返回对象中的信息会作为属性传递给组件
    }
})(Demo)
*/
