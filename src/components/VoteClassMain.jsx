import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
class VoteClassMain extends React.Component {
    // static defaultProps = {
    //     sup: 0,
    //     opp: 0
    // };
    // static propTypes = {
    //     sup: PropTypes.number,
    //     opp: PropTypes.number
    // };
    static contextType = ThemeContext;
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        const { store } = this.context;
        store.subscribe(() => {
            this.forceUpdate(); //强制更新
        });
    }
    render() {
        const { store } = this.context;
        let { supNum, oppNum } = store.getState();

        // let { sup, opp } = this.props;
        let ratio = '',
            total = supNum + oppNum;
        if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + '%';

        return (
            <div className='main'>
                <p>支持人数：{supNum}</p>
                <p>反对人数：{oppNum}</p>
                <p>支持比率：{ratio}</p>
            </div>
        );
    }
}
export default VoteClassMain;
