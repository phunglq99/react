import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph( ) {
    const contextValue = useContext(ThemeContext)
    console.log(contextValue.theme);
    
    return (
        <div>
            <p className={contextValue.theme}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt explicabo exercitationem quis,
            asperiores dolor expedita nobis blanditiis sed. Pariatur sint aut ex enim, dicta assumenda id expedita hic veritatis.</p>
        </div>
    )
}

export default Paragraph