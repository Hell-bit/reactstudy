import { Button } from 'antd';
import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
//创建一个容器
const store = observable({
    num: 100
});
store.change = action(() => {
    store.num++;
});
/*@observer
class Demo extends React.Component {
    render() {
        return (
            <div>
                <span>{store.num}</span>
                <br />
                <Button
                    onClick={() => {
                        store.change();
                    }}
                >
                    按钮
                </Button>
            </div>
        );
    }
}
*/
const Demo = () => {
    return (
        <div>
            <span>{store.num}</span>
            <br />
            <Button
                onClick={() => {
                    store.change();
                }}
            >
                按钮
            </Button>
        </div>
    );
};
export default observer(Demo);
