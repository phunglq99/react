import { useReducer, useRef, useState } from "react";
import reducer, {initState} from './reducer';
import {setJob, addJob, deleteJob} from './action';
import logger from "./logger";

// Cách triển khai bài toán này
// useState
// 1. Init State: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init State: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch


//  Dispatch
function Todo () {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const { job, jobs } = state;
    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''));

        inputRef.current.focus()
    }


    return (
        <div style={{ padding: '0 20px' }}>
            <h1>Todo</h1>
            <input type="text"
                value={job}
                ref = {inputRef}
                placeholder="Enter todo ..."
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
                />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((item, index) => {
                    return <li key={index}>
                                {item}
                                <span onClick={() => {
                                    dispatch(deleteJob(index))
                                }}>
                                    &times;
                                </span>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Todo