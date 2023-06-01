import React from 'react';
import PropTypes from 'prop-types';
const Dialog = (props) => {
    let { title, content, children } = props;
    children = React.Children.toArray(children);
    return (
        <div>
            <div>{title}</div>
            <div className='main'>{content}</div>
            <div>{children.length > 0 ? children : null}</div>
        </div>
    );
};
Dialog.defaultProps = {
    title: '温馨提示'
};
Dialog.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired
};
export default Dialog;
