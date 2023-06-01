import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
class VoteClassFooter extends React.PureComponent {
    static contextType = ThemeContext;
    static propTypes = {
        handleSup: PropTypes.func.isRequired,
        handleOpp: PropTypes.func.isRequired
    };
    render() {
        const { store } = this.context;
        console.log('footer:', store);
        let { handleSup, handleOpp } = this.props;
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
    }
}
export default VoteClassFooter;
