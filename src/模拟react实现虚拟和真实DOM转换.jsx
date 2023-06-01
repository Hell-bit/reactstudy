import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { createElement, render } from './jsxHandle';
// react 严格模式  <React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
let x = 10;
let y = 20;
let styleObj = {
    fontSize: '20px',
    color: 'red'
};
// root.render(
//     <div className='container'>
//         <h2 className='title' style={styleObj}>
//             学习React
//         </h2>
//         <div className='box'>
//             <span>{x}</span>
//             <span>{y}</span>
//         </div>
//     </div>
// );

let jsxObj = createElement(
    'div',
    { className: 'container' },
    createElement('h2', { className: 'title' }, '\u5B66\u4E60React'),
    createElement('div', { className: 'box' }, createElement('span', null, x), createElement('span', null, y))
);
// render(jsxObj, document.getElementById('root'));
