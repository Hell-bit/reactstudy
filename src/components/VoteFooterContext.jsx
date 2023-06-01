import { Button } from 'antd';
import React from 'react';
import ThemeContext from '../ThemeContext';
/**
 *  方法二：函数组件基于上下文对象context，进行组件通信<ThemeContext.Consumer> context=>{通过解构获取传递的状态}
 * 通过bind预传参
 * @returns
 */
const VoteFooterContext = () => {
    console.log('footer render');
    return (
        <ThemeContext.Consumer>
            {(context) => {
                let { change } = context;
                return (
                    <div className='footer'>
                        <Button type='primary' onClick={change.bind(null, 'sup')}>
                            支持
                        </Button>
                        <Button type='primary' danger onClick={change.bind(null, 'opp')}>
                            反对
                        </Button>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default VoteFooterContext;
