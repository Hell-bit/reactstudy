import { observable, action, autorun, observe } from 'mobx';

const store = observable({
    x: 10
});
autorun(() => {
    //会立即执行一次 自动建立依赖检测
    //当依赖的值发生改变，会自动执行
    console.log('autorun', store.x);
});

setTimeout(() => {
    store.x = 1000;
}, 1000);

const Demo = () => {};
export default Demo;
