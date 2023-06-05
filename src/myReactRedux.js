import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { bindActionCreators } from 'redux';
const ThemeContext = createContext();
/**
 * Provider: 把传递进来的store放在根组件上下文中
 * children 插槽组件
 * @param {*} props
 * @returns
 */
export function Provider(props) {
    let { store, children } = props;
    return <ThemeContext.Provider value={{ store }}>{children}</ThemeContext.Provider>;
}
/**
 * 利用高阶组件的概念
 * connect 获取上下文中的store，然后把公共状态，和要派发的方法，都基于属性传递给需要渲染的组件
 * 把让组件更新的方法放进事件池中
 * @param {*} mapStateToProps
 * @param {*} mapDispatchToProps
 * @returns 返回值为一个函数
 */
export function connect(mapStateToProps, mapDispatchToProps) {
    //处理默认值
    if (!mapStateToProps) {
        mapStateToProps = () => {
            return {};
        };
    }
    if (!mapDispatchToProps) {
        mapDispatchToProps = (dispatch) => {
            return {
                dispatch
            };
        };
    }
    //Component:最重要渲染的组件
    return function currying(Component) {
        //最后导出的组件
        return function HOC(props) {
            //在HOC中需要获取上下文中的store信息
            let { store } = useContext(ThemeContext);
            let { getState, dispatch, subscribe } = store;
            //向事件池中加入让组件更新的方法
            let [, forceUpdate] = useState(0);
            useEffect(() => {
                let unsubscribe = subscribe(() => {
                    forceUpdate(+new Date());
                });

                return () => {
                    //在组件释放的时候，把事件池中的函数移除掉
                    unsubscribe();
                };
            }, []);
            // 把mapStateToProps和mapDispatchToProps执行，把执行的返回值作为属性传递给组件
            let state = getState();
            let nextState = useMemo(() => {
                return mapStateToProps(state);
            }, [state]);
            let dispatchProps = {};
            if (typeof mapDispatchToProps === 'function') {
                dispatchProps = mapDispatchToProps(dispatch);
            } else {
                //若传递的是一个actionCreator对象，需要通过bindActionCreators来处理
                dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
            }
            //最终渲染的组件
            return <Component {...props} {...nextState} {...dispatchProps} />;
        };
    };
}
