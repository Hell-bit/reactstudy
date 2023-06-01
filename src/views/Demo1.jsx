import PropTypes from 'prop-types';
import React from 'react';
/**
 * 函数组件的创建以及传参规则校验
 * @param {*} props
 * @returns
 */
const DemoOne = (props) => {
    console.log(React.Children);
    let { className, title, style, x, children } = props;
    console.log(x);
    children = React.Children.toArray(children);
    return (
        <div className={className} style={style}>
            <div>{children[0]}</div>
            {title}
            <div>{children[1]}</div>
        </div>
    );
};
//设置props传参的默认值
DemoOne.defaultProps = {
    x: 0
};
// 利用prop-types库，设置prop传值规则
DemoOne.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number
};
export default DemoOne;
