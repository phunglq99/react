import { useState } from "react";
import Content from "./Content"
import './style.css'


// Context: đơn giản hóa việc truyền data từ component cha xuống component con mà không cần sử dụng props
// CompA => ComB => ComC

// Thmeme: Dark / Light

function UseContext() {
    const [ theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div style={{ padding:20 }}>
            <button onClick={toggleTheme}>Toogle Theme</button>
            <Content theme = {theme}/>
        </div>
    )
}

export default UseContext