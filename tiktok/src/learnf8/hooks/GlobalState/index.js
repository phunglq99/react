import { useRef } from "react";
import { actions, useContextStore } from "./store";

function GlobalState() {

    const [state , disptach] = useContextStore();

    const { todoInput, todo} = state;

    const inputRef = useRef()

    const handleAdd = () => {
        disptach(actions.addTodoInput(todoInput))
        disptach(actions.setTodoInput(''))
        inputRef.current.focus();
    }

    const deleteBtn = () => {
        
    }

    return (
            <div>
                <input
                    value={todoInput}
                    ref= {inputRef}
                    placeholder="Enter todo..."
                    onChange={(e) => {
                        disptach(actions.setTodoInput(e.target.value))
                    }}
                />
                <button onClick={handleAdd}>Add</button>
                {todo.map((todo, index) => {
                    return (
                        <>
                            <li key={index}>
                                {todo}
                            </li>
                            <button onClick={deleteBtn()}>x</button>
                        </>
                    )
                })}
            </div>
    )
}

export default GlobalState;