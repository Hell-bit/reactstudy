import React from 'react';
import './index.less';

/**
 * React合成事件原理
 * React中的合成事件不是通过addEventListener绑定的，而是通过事件委托机制处理的
 * 在React17及以后版本都是委托给root容器处理的「捕获和冒泡都做了委托」，
 * 在此之前都是委托给document处理的「而且只做了冒泡阶段的委托」
 * 对于没有实现事件传播机制的事件，才单独做的事件绑定例如：「onMouseEnter...」
 * 在组建渲染时，如果发现元素属性中带有onXxx这样的属性，React底层处理不会给当前元素直接做事件绑定，
 * 只是把绑定的方法赋值给相关的元素属性，然后对root这个容器做了事件绑定，而且是捕获和冒泡都做了
 * 原因：因为组件当中所渲染的内容都会插入到root容器当中，这样点击页面当中任何一个元素都会把root点击行为处罚
 * 而在给root的绑定方法当中，把之前给元素设置的属性，在相应阶段执行
 */
class Demo extends React.Component {
    render() {
        return (
            <div
                className='outer'
                onClick={() => {
                    console.log('outer 冒泡 「合成」');
                }}
                onClickCapture={() => {
                    console.log('outer 捕获「合成」');
                }}
            >
                <div
                    className='inner'
                    onClick={() => {
                        console.log('inner 冒泡「合成」');
                    }}
                    onClickCapture={() => {
                        console.log('inner 捕获「合成」');
                    }}
                ></div>
            </div>
        );
    }
    componentDidMount() {
        document.addEventListener(
            'click',
            () => {
                console.log('document 捕获');
            },
            true
        );
        document.addEventListener(
            'click',
            () => {
                console.log('document 冒泡');
            },
            false
        );
        document.body.addEventListener(
            'click',
            () => {
                console.log('body 捕获');
            },
            true
        );
        document.body.addEventListener(
            'click',
            () => {
                console.log('body 冒泡');
            },
            false
        );
        const root = document.getElementById('root');
        root.addEventListener(
            'click',
            () => {
                console.log('root 捕获 「原生」');
            },
            true
        );
        root.addEventListener(
            'click',
            () => {
                console.log('root 冒泡 「原生」');
            },
            false
        );
        const outer = document.querySelector('.outer');
        const inner = document.querySelector('.inner');
        outer.addEventListener(
            'click',
            () => {
                console.log('outer 捕获 「原生」');
            },
            true
        );
        outer.addEventListener(
            'click',
            () => {
                console.log('outer 冒泡 「原生」');
            },
            false
        );
        inner.addEventListener(
            'click',
            () => {
                console.log('inner 捕获 「原生」');
            },
            true
        );
        inner.addEventListener(
            'click',
            () => {
                console.log('inner 冒泡 「原生」');
            },
            false
        );
    }
}
export default Demo;
