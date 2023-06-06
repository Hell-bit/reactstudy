//类的装饰器
/*const test = (target) => {
    // target: Demo 给类设置静态私有属性方法
    target.num = 100;
    target.getNum = function getNum() {};
};

@test
class Demo {}
console.dir(Demo);
*/

/*const test = (target, name, descriptor) => {
    console.log(target, name, descriptor);
};
class Demo {
    @test
    x = 100;
}
*/

const readOnly = (_, name, descriptor) => {
    //当装饰器作用于属性时,属性的值=调用descriptor.initializer()方法
    // console.log(descriptor); //{configurable: true, enumerable: true, writable: true, initializer: ƒ}
    console.log(descriptor.initializer());
    descriptor.writable = false;
};
const loggerTime = (_, name, descriptor) => {
    //当装饰器作用域方法时,调用方法= descriptor.value()
    // console.log(descriptor); //{writable: true, enumerable: false, configurable: true, value: ƒ}
    let func = descriptor.value;
    descriptor.value = function (...params) {
        console.time(name);
        let res = func.call(this, ...params);
        console.timeEnd(name);
        return res;
    };
};

class Demo {
    @readOnly x = 100;
    @loggerTime
    getX() {
        return this.x;
    }
}
let d = new Demo();
console.log(d.getX(10, 20));
