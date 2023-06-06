/**
 * // Object.defineProperty(obj,key,descriptors)
 *  1.设置对象中某个成员的规则
 *      + 如果成员存在则修改其规则
 *      + 如果不存在则新增成员，并设置规则，「默认是所有规则都是false」
 *
 * 对象成员的规则限制
 *  + Object.getOwnPropertyDescriptor(对象，成员) 获取对象中某个成员的规则
 *  + Object.getOwnPropertyDescriptors（对象） 获取对象所有成员的规则
 *  + 规则
 *  + configurable 是否可删除
 *  + writable  是否可更改
 *  + enumerable 是否可枚举「for/in 或者被Object.keys列举出来的属性」
 *  + value 成员值
 */
let obj = { x: 100 };
console.log(Object.getOwnPropertyDescriptor(obj, 'x')); //查看对象属性所拥有的规则
console.log(Object.getOwnPropertyDescriptors(obj));
//{value: 100, writable: true, enumerable: true, configurable: true}
Object.defineProperty(obj, 'x', {
    enumerable: false,
    writable: false,
    configurable: false
});
Object.defineProperty(obj, 'y', {});
