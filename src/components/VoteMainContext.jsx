import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
/**
 *
 * 方法一：函数组件基于上下文对象context，使用  let { sup, opp } = useContext(ThemeContext);
 * memo可以对传过来的新老属性进行比较，如果传过来的属性没有发生改变，就不会更新
 * @param {*} props
 * @returns
 */
const VoteMainContext = () => {
    let { sup, opp } = useContext(ThemeContext);
    let ratio = useMemo(() => {
        let ratio = '';
        let total = sup + opp;
        if (total > 0) ratio = ((sup / total) * 100).toFixed(2) + '%';
        return ratio;
    }, [sup, opp]);

    return (
        <div className='main'>
            <p>支持人数：{sup}</p>
            <p>反对人数：{opp}</p>
            <p>支持比率：{ratio}</p>
        </div>
    );
};

export default VoteMainContext;
