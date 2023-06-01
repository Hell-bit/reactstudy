import React from 'react';
import { flushSync } from 'react-dom';
/**
 * setState进阶
 * setState不是同步的
 * setState的所有操作都是异步的，在执行时会优先将所有的setState操作统一放进队列当中，利用updater机制，实现状态的批处理，
 * 可以有效减少更新次数，降低性能消耗
 * 当所有的代码操作任务结束，会通知队列执行更新
 * this.setState(partialState,callBack);partial(帕烧)  部分的
 * partialState 支持部分状态更新
 * callBack 在状态更改，视图更新完毕后触发执行  在componentDidUpdate()之后执行 在componentDidUpdate会在任何状态更新后执行，
 * 回调函数可以让我们在指定的某些属性改变时 做某些事情
 * 特殊：即使shouldComponentUpdate   return false  阻止视图更新，依然会触发回调函数的执行
 *flushSync可以立即执行更新队列
 */
class Demo extends React.Component {
    state = {
        x: 10,
        y: 20,
        z: 30,
        e: 0
    };
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    handleClick = () => {
        let { x, y, z } = this.state;
        this.setState({ x: x + 1 }, () => {
            console.log('更新完毕x');
        });
        flushSync(() => {
            this.setState({ y: y + 1 });
        });
        //此时state更新队列已执行完毕
        this.setState({ e: this.state.x + this.state.y });
        this.setState({ z: z + 1 });
    };
    render() {
        let { x, y, z, e } = this.state;
        return (
            <div>
                <h2>setState进阶</h2>

                <div>
                    x:{x}--y:{y}--z:{z}--e:{e}
                </div>
                <button onClick={this.handleClick}>按钮</button>
            </div>
        );
    }
}
export default Demo;
