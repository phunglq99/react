import { useReducer, useRef, useState } from "react"

// Cách triển khai bài toán này
// useState
// 1. Init State: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init State: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch


// 1. Init State
    const initState = {
        job:'',
        jobs:[]
    }

// 2. Action:
    const SET_JOB = 'SET_JOB';
    const ADD_JOB = 'ADD_JOB';
    const DELETE_JOB = 'DELETE_JOB';

    const setJob = payload => {
        return {
            type: SET_JOB,
            payload
        }
    }

    const addJob = payload => {
        return {
            type: ADD_JOB,
            payload
        }
    }

    const deleteJob = payload => {
        return {
            type: DELETE_JOB,
            payload
        }
    }

// 3. Reducer
    const reducer = (state, action) => {
        console.log('Action', action);
        console.log('PrevState', state);

        let newState;

        switch(action.type) {
            case SET_JOB:
                newState = {
                    ...state,
                    job: action.payload
                }
            break;
            case ADD_JOB:
                newState = {
                    ...state,
                    jobs: [...state.jobs, action.payload]
                }
            break;
            case DELETE_JOB:
                const newJobs = [...state.jobs];

                newJobs.splice(action.payload, 1);

                newState = {
                    ...state,
                    jobs: newJobs
                }

            break;
            default: throw new Error('Invalid action')
        }

        console.log("newState",newState);
        return newState
    }
// 4. Dispatch

function UseReducer () {
    const [state, dispatch] = useReducer(reducer, initState)

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
                {state.jobs.map((item, index) => {
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

export default UseReducer