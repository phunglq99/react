
/*
 * memo() -> Higher Order Component (HOC)
 * useCallback()
 */

// Hooks
// HOC
//Render props
import UseCallback from "./hooks/UseCallback";
import { memo, useCallback, useRef, useState } from "react";



function MemoHOC() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    })

    return (
        <div style={{ padding: '10px 32px' }}>
            <UseCallback onIncrease = {handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}
export default MemoHOC;