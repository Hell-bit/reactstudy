const isObject = (obj) => {
    return obj !== null && /^(function|object)$/.test(typeof obj);
};

const shallowEqual = (objA, objB) => {
    if (!isObject(objA) || !isObject(objB)) return false;
    if (objA === objB) return true;
    //先比较成员的数量
    let keysA = Reflect.ownKeys(objA);
    let keysB = Reflect.ownKeys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
        let key = keysA[i];
        if (objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
            return false;
        }
    }
    return true;
};
