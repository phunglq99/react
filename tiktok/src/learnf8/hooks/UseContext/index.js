import { useContext } from "react";
import Content from "./Content"
import './style.css'
import { ThemeContext, ThemeProvider } from "./ThemeContext";


// Context: đơn giản hóa việc truyền data từ component cha xuống component con mà không cần sử dụng props
// CompA => ComB => ComC

// Thmeme: Dark / Light
/* 
    1. Create context
    2. Provider
    3. Consumer
*/

function UseContext() {
    const contextValue = useContext(ThemeContext)

    return (
        <div style={{ padding:20 }}>
            <button onClick={contextValue.toggleTheme}>Toogle Theme</button>
            <Content />
        </div>
    )
}

export default UseContext