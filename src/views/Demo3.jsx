import React from 'react';
import PropTypes from 'prop-types';
/**
 * Component 和 PureComponent 的区别
 * PureComponent对象会在内部自动添加shouldComponentUpdate()方法 进行浅比较，因此当对象类型的数据内部状态发生改变时并不会更新视图
 * 如果需要同步更新，就需要利用结构赋值的方法更新对象地址   arr= [...arr]
 */
class Demo extends React.PureComponent {
    static defaultProps = {
        arr: []
    };
    static propTypes = {
        arr: PropTypes.array
    };
    constructor(props) {
        super(props);
        this.state = {
            arr: [10, 20, 30]
        };
    }
    componentDidMount() {}
    render() {
        let { arr } = this.state;
        return (
            <div>
                {arr.map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                width: 100,
                                height: 100,
                                marginRight: 10,
                                display: 'inline-block',
                                lineHeight: '100px',
                                textAlign: 'center',
                                backgroundColor: 'pink'
                            }}
                        >
                            {item}
                        </span>
                    );
                })}
                <button
                    style={{ display: 'block', marginTop: '10px' }}
                    onClick={() => {
                        arr.push(40);
                        this.setState({
                            // arr //此方法并不会使试图更新，
                            arr: [...arr]
                        });
                    }}
                >
                    追加一个盒子
                </button>
            </div>
        );
    }
}
export default Demo;
