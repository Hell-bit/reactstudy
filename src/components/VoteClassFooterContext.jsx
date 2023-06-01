import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
/**
 * 获取上下文属性方法2 利用ThemeContext.Consumer 容器
 *
 */
class VoteClassFooterContext extends React.PureComponent {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    let { handleSup, handleOpp } = context;
                    return (
                        <div className='footer'>
                            <Button type='primary' onClick={handleSup}>
                                支持
                            </Button>
                            <Button type='primary' danger onClick={handleOpp}>
                                反对
                            </Button>
                        </div>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}
export default VoteClassFooterContext;
