import React from 'react';
import VoteClassFooterContext from '../components/VoteClassFooterContext';
import VoteClassMainContext from '../components/VoteClassMainContext';
import ThemeContext from '@/ThemeContext';
import './demo.less';

/**
 * 类组件基于上下文方案实现祖先与后代的通信
 * 1.创建上下文对象用来管理状态，在src根目录下创建context对象
 * 2.基于上下文中提供的Provider组件ThemeContext.Provider来实现状态传递
 * 3.向上下文中存储信息：value属性指定的值就是要存储的状态
 */
class DemoContext extends React.Component {
    state = {
        supNum: 10,
        oppNum: 5
    };
    handleSup = () => {
        this.setState({
            supNum: this.state.supNum + 1
        });
    };
    handleOpp = () => {
        this.setState({
            oppNum: this.state.oppNum + 1
        });
    };
    render() {
        let { supNum, oppNum } = this.state;
        return (
            <ThemeContext.Provider
                value={{
                    sup: supNum,
                    opp: oppNum,
                    handleSup: this.handleSup,
                    handleOpp: this.handleOpp
                }}
            >
                <div className='vote_class_box'>
                    <div className='header'>
                        <h2 className='title'>React类组件基于上下文实现组件通信</h2>
                        <span className='num'>{supNum + oppNum}</span>
                    </div>
                    <VoteClassMainContext />
                    <VoteClassFooterContext />
                </div>
            </ThemeContext.Provider>
        );
    }
}
export default DemoContext;
