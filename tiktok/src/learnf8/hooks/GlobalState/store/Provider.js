import { useContext, useReducer } from "react"
import reducer, {initState} from "./reducer"
import Context from "./Context"
import logger from "./logger"

function Provider( {children} ) {
    const [state, disptach] = useReducer(logger(reducer), initState)


    return (
        <Context.Provider value = { [state, disptach] }>
            {children}
        </Context.Provider>
    )
}

export default Provider