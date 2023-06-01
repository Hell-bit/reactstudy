import React from 'react';
/**
 * React合成事件原理  移动端处理
 */
class Demo extends React.Component {
    //手指摁下记录手指的坐标
    touchstart = (e) => {
        let finger = e.changedTouches[0];
        this.touch = {
            startX: finger.pageX,
            startY: finger.pageY,
            isMove: false
        };
    };
    //手指移动
    touchmove = (e) => {
        let finger = e.changedTouches[0];
        let { startX, startY } = this.touch;
        let changeX = finger.pageX - startX;
        let changeY = finger.pageY - startY;
        if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
            this.touch.isMove = true;
        }
    };
    //手指离开：根据isMove判断是否是点击
    touchend = (e) => {
        let { isMove } = this.touch;
        if (isMove) return;
        //说明触发了点击
        console.log('点击');
    };
    render() {
        return (
            <div>
                <button onTouchStart={this.touchstart} onTouchMove={this.touchmove} onTouchEnd={this.touchend}>
                    提交
                </button>
            </div>
        );
    }
}
export default Demo;
