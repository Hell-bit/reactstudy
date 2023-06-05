import { Button } from 'antd';
// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// import ThemeContext from '../ThemeContext';
// import { connect } from 'react-redux';
import { connect } from '@/myReactRedux';
import actions from '../store/actions';
const VoteFooter = (props) => {
    // let { handleSup, handleOpp } = props;
    // const { store } = useContext(ThemeContext);
    let { sup, opp } = props;
    console.log('footer render');
    return (
        <div className='footer'>
            <Button
                type='primary'
                onClick={() => {
                    // store.dispatch(actions.vote.sup());
                    sup();
                }}
            >
                支持
            </Button>
            <Button
                type='primary'
                danger
                onClick={() => {
                    // store.dispatch(actions.vote.opp());
                    opp();
                }}
            >
                反对
            </Button>
        </div>
    );
};
// VoteFooter.propTypes = {
//     handleSup: PropTypes.func.isRequired,
//     handleOpp: PropTypes.func.isRequired
// };
//react-redux 优化
// export default connect(null, (dispatch) => {
//     return {
//         sup() {
//             dispatch(actions.vote.sup());
//         },
//         opp() {
//             dispatch(actions.vote.opp());
//         }
//     };
// })(VoteFooter);
//继续优化
export default connect(null, actions.vote)(VoteFooter);
