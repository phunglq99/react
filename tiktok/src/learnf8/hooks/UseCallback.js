import { Fragment, memo } from "react";

//  Để tối ưu những prop là function
// giúp tránh tạo ra những hàm mới mốt cách không cần thiết trong function component
// Sử dụng khi component con có sử dụng React.memo

function UseCallback( {onIncrease} ) {
    console.log("re-render");

    return (
        <Fragment>
            <h2>HELLO ANH EM </h2>
            <button onClick= {onIncrease}>Click me!</button>
        </Fragment>
    )
}

export default memo(UseCallback)