import React from 'react';
import { createUseStyles } from 'react-jss';
/**
 * React样式私有化处理 五种方案
 * 1.内联样式=>行内样式
 * 2.使用class命名方案来解决
 * 3.CSSModules
 * 4.React-jss
 * @returns
 */
/**
 * 基于createUseStyles方法，构建组件所需要的样式
 * 返回的结果是一个自定义Hook函数
 * 可以类似于less等预编译语言的嵌套样式
 */
const useStyles = createUseStyles({
    box: {
        backgroundColor: 'pink',
        width: '300px'
    },
    title: {
        fontSize: '20px',
        color: 'red',
        '&:hover': {
            color: 'green'
        }
    },
    list: {
        '& a': {
            fontSize: '16px'
        }
    }
});

const Nav = () => {
    console.log(useStyles());
    let { box, title, list } = useStyles();
    const NavStyle = {
        color: 'red'
    };
    return (
        <nav className={box}>
            <h2 className='title'>购物商城</h2>
            <div className='list'>
                <a href='/#' style={NavStyle}>
                    首页
                </a>
                <a href='/#' style={NavStyle}>
                    秒杀
                </a>
                <a href='/#' style={NavStyle}>
                    我的
                </a>
            </div>
        </nav>
    );
};
export default Nav;
