import React from 'react';
import VoteClassFooter from '../components/VoteClassFooter';
import VoteClassMain from '../components/VoteClassMain';
import './demo.less';

/**
 * 类父子组件通信
 */
class DemoClass extends React.Component {
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
            <div className='vote_class_box'>
                <div className='header'>
                    <h2 className='title'>React 类组件通信</h2>
                    <span className='num'>{supNum + oppNum}</span>
                </div>
                <VoteClassMain sup={supNum} opp={oppNum} />
                <VoteClassFooter handleSup={this.handleSup.bind(this)} handleOpp={this.handleOpp.bind(this)} />
            </div>
        );
    }
}
export default DemoClass;
