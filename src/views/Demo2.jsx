import React from 'react';
import PropTypes from 'prop-types';
/**
 * 创建一个类组件，要求必须继承React.Component/PureComponent实现投票
 * 生命周期
 * 1.componentWillMount(){} 即将被移除，不建议使用 第一次渲染之前
 * 2.render() 渲染
 * 3.componentDidMount() 渲染完毕
 * 4.shouldComponentUpdate()是否允许更新  此函数需要返回一个true/false  true允许更新视图  false 不允许更新
 * 5.componentDidUpdate() 组件更新之后
 * 6.componentWillUnmount() 组件卸载之前
 */
class Demo extends React.Component {
    //属性规则校验
    static defaultProps = {
        num: 10
    };
    static propTypes = {
        title: PropTypes.string,
        num: PropTypes.number.isRequired
    };
    constructor(props) {
        super(props);
        console.log(Object.isFrozen(this.props)); //判断对象是否被冻结
        console.log(Object.isSealed(this.props)); //判断对象是否被密封
        console.log(Object.isExtensible(this.props)); //判断对象是否可扩展
        this.state = {
            sup: 10,
            opp: 5
        };
    }
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state);
        console.log(nextState);

        console.log('shouldComponentUpdate');
        return false;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        console.log('render');
        let { title } = this.props;
        let { sup, opp } = this.state;
        return (
            <div>
                <h2 className='title'>{title}</h2>
                <div>支持: {sup}</div>
                <div>反对: {opp} </div>
                <div>参与人数:{sup + opp}</div>
                <div>
                    <button
                        onClick={() => {
                            this.setState({
                                sup: sup + 1
                            });
                        }}
                    >
                        支持
                    </button>
                    <button
                        onClick={() => {
                            // this.state.opp++;  //不建议使用
                            // this.forceUpdate(); //强制视图更新
                            this.setState({
                                opp: opp + 1
                            });
                        }}
                    >
                        反对
                    </button>
                </div>
            </div>
        );
    }
}

export default Demo;
