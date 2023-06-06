import React, { useState } from 'react';
// import Nav from '@/views/Nav';
// import Menu from '@/views/Menu';
// import Demo from '@/views/Demo22';

const App = () => {
    let [x, setX] = useState(10),
        [y, setY] = useState(5);
    return (
        <div className='home_box'>
            {/* <Nav />
            <Menu /> */}
            {/* <div className='box'>内容</div> */}
            <Demo x={x} y={y} enable={true} />
        </div>
    );
};
export default App;
