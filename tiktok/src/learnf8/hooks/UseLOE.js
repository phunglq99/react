
// useEffect
/*
 * Cập nhật lại state
 * Cập nhật DOM (mutated)
 * Render lại UI
 * Gọi cleanup nếu deps thay đổi
 * Gọi useEffect callback
 */

import { useEffect, useLayoutEffect, useState } from "react"

// useLayoutEffect
/*
 * Cập nhật lại State
 * Cập nhật lại DOM (mutated)
 * Gọi cleanup nếu deps thay đổi (sync)
 * Gọi useLayoutEffect callback (sync)
 * Render lai UI
*/



function UseLOE() {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default UseLOE