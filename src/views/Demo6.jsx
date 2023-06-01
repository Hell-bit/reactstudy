import React from 'react';
// import { flushSync } from 'react-dom';
/**
 * setState进阶
 * 再循环中修改状态
 * for (let i = 0; i < 20; i++) {
 *          // this.setState({ 此方式由于setState会将结果存在更新队列当中 ，结果值并未修改，所以视图只会渲染一次，结果只能0+1
 *          //     x: this.state.x + 1
 *          // });
 *     }
 * 利用flushSync解决或者将修改状态的操作放在循环执行完毕后
 * 或者
 * this.setState((prevState) => {   prevState 存储之前的状态值   return对象就是我们需要修改的状态值
 *               return {
 *                   x: prevState + 1
 *               };
 *           });
 */
class Demo extends React.Component {
    state = {
        x: 0
    };
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    handleClick = () => {
        // let { x } = this.state;
        // for (let i = 0; i < 20; i++) {
        //     x += 1;
        // }
        // this.setState({
        //     x: this.state.x + x
        // });
        for (let i = 0; i < 20; i++) {
            this.setState((prevState) => {
                return {
                    x: prevState + 1
                };
            });
        }
    };
    render() {
        console.log('渲染');
        let { x } = this.state;
        return (
            <div>
                <h2>setState进阶</h2>

                <div>x:{x}</div>
                <button onClick={this.handleClick}>按钮</button>
            </div>
        );
    }
}
export default Demo;
