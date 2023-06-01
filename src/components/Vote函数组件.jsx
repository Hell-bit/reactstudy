import PropTypes from 'prop-types';

/**
 * 投票组件，通过此函数可明确  函数组件为静态组件，第一次渲染组件，把函数运行，
 * 函数组件第一次渲染之后，组件中的内容不是再根据组件的某些操作进行更新，所以成为「静态组件」，除非在父组件中重新调用此函数组件，传递不同的值
 * @param {*} props
 * @returns
 */

const Vote = (props) => {
    let { title } = props;
    let sup = 10;
    let opp = 5;
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <div>支持: {sup}</div>
            <div>反对: {opp} </div>
            <div>参与人数:{sup + opp}</div>
            <div>
                <button
                    onClick={() => {
                        sup++;
                        console.log(sup); //触发函数后值已修改，但页面视图未更新
                    }}
                >
                    支持
                </button>
                <button
                    onClick={() => {
                        opp++;
                        console.log(opp); //触发函数后值已修改，但页面视图未更新
                    }}
                >
                    反对
                </button>
            </div>
        </div>
    );
};
Vote.defaultProps = {
    title: 'VUE'
};
Vote.propTypes = {
    title: PropTypes.string
};
export default Vote;
