import { useContext } from "react"
import Context from "./Context"


export const useContextStore = () => {
    const [state, disptach] = useContext(Context);

    return [state, disptach]
}