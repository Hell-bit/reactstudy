import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
// import { connect } from 'react-redux';
/**
 * memo可以对传过来的新老属性进行比较，如果传过来的属性没有发生改变，就不会更新
 * @param {*} props
 * @returns
 */
const VoteMain = (props) => {
    let { sup, opp } = props;
    const { store } = useContext(ThemeContext);
    let { supNum, oppNum } = store.getState();
    let ratio = useMemo(() => {
        let ratio = '';
        let total = supNum + oppNum;
        if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + '%';
        return ratio;
    }, [supNum, oppNum]);

    return (
        <div className='main'>
            <p>支持人数：{supNum}</p>
            <p>反对人数：{oppNum}</p>
            <p>支持比率：{ratio}</p>
        </div>
    );
};
VoteMain.defaultProps = {
    sup: 10,
    opp: 0
};
VoteMain.propTypes = {
    sup: PropTypes.number.isRequired,
    opp: PropTypes.number.isRequired
};
export default VoteMain;
