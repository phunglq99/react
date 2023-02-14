import { useEffect, useState } from "react"

// side effects

/* 1. useEffect(callback):
    + Gọi callback mỗi khi component re-render
    + Gọi callback sau khi element thêm vào DOM
2. useEffect(callback,[])
    + Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback,[deps])
    + Callback sẽ được gọi lại mỗi khi dependecies thay đổi
*/

// ------------------ý chung của 3 thành phần trên
// 1. Callback luôn được gọi sau khi Component mounted

const tabs = ['posts', 'comments','albums', 'photos', 'todos', 'users']

function Content() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    },[type])

    return (
        <div>
            {tabs.map(tab => {
                return (
                    <button key={tab}
                        style={type === tab ? {color: 'white', backgroundColor: 'red'} : {}}
                        onClick ={() => setType(tab)}
                    >
                        {tab}
                    </button>
                )
            })}

            <input
                type="text"
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>{post.title || post.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content