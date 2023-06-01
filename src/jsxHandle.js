/**
 * 封装一个对象的迭代方法，获取对象的所有私有属性「私有的、不论是否可枚举、不论类型」
 *
 * 解决方法 :Object.getOwnPropertyNames(obj) --> 获取对象非Symbol类型的所有私有属性「无关是否可枚举」
 *          Object.getOwnPropertySymbols(obj) -->获取对象Symbol类型的所有属性
 * 所有的私有属性:Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
 * es6新方法 : Reflect.ownKeys(obj) --> 可替代上述操作  弊端:不兼容IE
 * @param {*} obj
 */
const each = (obj, callBack) => {
    if (obj === null || typeof obj !== 'object') throw new TypeError(obj + 'is not object');
    if (typeof callBack !== 'function') throw new TypeError(callBack + 'is not function');
    let keys = Reflect.ownKeys(obj);
    keys.forEach((key) => {
        let value = obj[key];
        callBack(value, key);
    });
};

/**
 * createElement 方法创建虚拟DOM对象
 * @param {*} ele
 * @param {*} props
 * @param  {...any} children
 */
export function createElement(ele, props, ...children) {
    let virtualDOM = {
        $$typeof: Symbol('react.element'),
        key: null,
        ref: null,
        type: null,
        props: {}
    };
    let len = children.length;
    virtualDOM.type = ele;
    if (props !== null) {
        virtualDOM.props = {
            ...props
        };
    }
    if (len === 1) virtualDOM.props.children = children[0];
    if (len > 1) virtualDOM.props.children = children;
    return virtualDOM;
}
/**
 * render 方法  将虚拟DOM转为真实DOM
 * @param {*} virtualDOM
 * @param {*} container
 */
export function render(virtualDOM, container) {
    let { type, props } = virtualDOM;
    debugger;
    if (typeof type === 'string') {
        let ele = document.createElement(type);
        each(props, (value, key) => {
            //className 的处理
            if (key === 'className') {
                ele.className = value;
                return;
            }
            //style 的处理
            if (key === 'style') {
                each(value, (val, attr) => {
                    console.log(attr);
                    ele.style[attr] = val;
                });
                return;
            }
            //子节点的处理
            if (key === 'children') {
                let children = value;
                if (!Array.isArray(children)) children = [children];
                children.forEach((child) => {
                    //子节点是文本直接插入即可
                    console.log(typeof child);
                    if (/^(string|number)$/.test(typeof child)) {
                        ele.appendChild(document.createTextNode(child));
                        return;
                    }
                    //子节点又是一个virtualDOM
                    render(child, ele);
                });
            }
            ele.setAttribute(key, value);
        });
        container.appendChild(ele);
    }
}
