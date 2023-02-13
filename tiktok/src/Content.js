import { useEffect, useState } from "react"

// side effects

/* 1. useEffect(callback):
    + Gọi callback mỗi khi component re-render
    + Gọi callback sau khi element thêm vào DOM
2. useEffect(callback,[])
    + Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback,[deps])
    +
*/

// ------------------ý chung của 3 thành phần trên
// 1. Callback luôn được gọi sau khi Component mounted

function Content() {
    const [posts, setPosts] = useState([])

    const [title, setTitle] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    },[])

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content