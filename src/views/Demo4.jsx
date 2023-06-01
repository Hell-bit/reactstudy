import React from 'react';
import PropTypes from 'prop-types';
/**
 * 受控组件：基于修改数据、状态，以达到视图更新的目的
 * 非受控组件：基于ref获取DOM元素
 * ref 的使用方法
 * 方法一：<h2 className='title' ref={'titleBox'}>     console.log(this.refs.titleBox);  不推荐
 * 方法二： <h2 className='title' ref={(e) => (this.box = e)}>    console.log(this.box);
 * 方法三：  box3 = React.createRef();  <h2 className='title' ref={this.box3}> console.log(this.box3.current);
 *
 * 给元素标签设置ref获取的是对应的DOM标签
 * 给类组件设置ref获取的是类组件的实例 <Child1 ref={(e) => (this.box1 = e)} />
 * 函数组件无法设置ref  但可以利用React.forwardRef来实现ref转发
 */
class Child1 extends React.Component {
    render() {
        return <div>1111</div>;
    }
}
// const Child2 = () => {
//     return <div>2222</div>;
// };
const Child2 = React.forwardRef((props, ref) => {
    return (
        <div>
            2222
            <button ref={ref}>按钮</button>
        </div>
    );
});
class Demo extends React.Component {
    static propTypes = {
        num: PropTypes.string
    };
    box3 = React.createRef();
    componentDidMount() {
        console.log(this.box);
        console.log(this.box1);
        console.log(this.box2);
        // console.log(this.box3.current);
    }
    render() {
        return (
            <div>
                <Child1 ref={(e) => (this.box1 = e)} />
                <Child2 ref={(e) => (this.box2 = e)} />
                <h2 className='title' ref={'titleBox'}>
                    温馨提示
                </h2>
                <h2 className='title' ref={(e) => (this.box = e)}>
                    友情提示
                </h2>
                <h2 className='title' ref={this.box3}>
                    郑重提示
                </h2>
            </div>
        );
    }
}
export default Demo;
