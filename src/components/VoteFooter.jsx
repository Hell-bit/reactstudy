import { Button } from 'antd';
// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
const VoteFooter = (props) => {
    // let { handleSup, handleOpp } = props;
    const { store } = useContext(ThemeContext);
    console.log('footer render');
    return (
        <div className='footer'>
            <Button
                type='primary'
                onClick={() => {
                    store.dispatch({
                        type: 'VOTE_SUP'
                    });
                }}
            >
                支持
            </Button>
            <Button
                type='primary'
                danger
                onClick={() => {
                    store.dispatch({
                        type: 'VOTE_OPP'
                    });
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
export default VoteFooter;
