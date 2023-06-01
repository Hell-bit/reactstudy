import React from 'react';

/**
 * 合成事件
 * 基于React内部的处理，若我们给合成事件绑定一个普通函数，当事件被触发，绑定函数执行，方法中的this回事undefined
 * 可利用bind方法绑定this;预先处理函数中的this和实参
 * 也可以把绑定的函数设置为箭头函数（推荐）
 * 合成事件对象：在react合成事件触发的时候，也可以获取到事件对象，只不过此对象是合成事件对象 SyntheticBaseEvent
 * 合成事件对象也包含了浏览器内置对象中的一些属性和方法
 * 也可以通过SyntheticBaseEvent.nativeEvent属性拿到浏览器原生的事件对象
 * bind()方法在React中的应用：
 * 1.绑定的方法是一个普通函数时，需要改变函数中的this指向
 * 2.想给函数传递实参，可基于bind预传参
 * 注意 bind会自动将合成事件对象，以最后一个参数传递给函数
 */
class Demo extends React.Component {
    handle1(x) {
        console.log(this); //undefined
    }
    handle2(e) {
        console.log(this); //实例
        console.log(e);
    }
    handle3 = (e) => {
        //绑定之后函数会被直接调用，如果需要预传参，可利用bind实现
        console.log(this);
        console.log(e); //SyntheticBaseEvent 「React内部经过特殊处理的合成事件对象」
    };
    render() {
        return (
            <div>
                <h2>React 合成事件</h2>
                <button onClick={this.handle1}>按钮1</button>
                <button onClick={this.handle2.bind(this)}>按钮2</button>
                <button onClick={this.handle3}>按钮3</button>
            </div>
        );
    }
}
export default Demo;
