import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
/**
 * 获取上下文属性方法1 给实例绑定静态属性contextType
 * static contextType = ThemeContext;
 * console.log(this.context)
 */
class VoteClassMainContext extends React.Component {
    static defaultProps = {
        sup: 0,
        opp: 0
    };

    static contextType = ThemeContext;
    // constructor(props) {
    //     super(props);
    // }
    render() {
        let { sup, opp } = this.context;
        let ratio = '',
            total = sup + opp;
        if (total > 0) ratio = ((sup / total) * 100).toFixed(2) + '%';

        return (
            <div className='main'>
                <p>支持人数：{sup}</p>
                <p>反对人数：{opp}</p>
                <p>支持比率：{ratio}</p>
            </div>
        );
    }
}
export default VoteClassMainContext;
