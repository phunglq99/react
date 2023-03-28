import { useEffect, useState } from "react"

// side effects
/*
    1. Events: Add / remove event listener
    2. Observer pattern: Subscribe / unsubscribe
    3. Closure
    4. Timer: SetInterval, setTimeout, clearInterval, clearTimeout
    5. useState
    6. Mounted / unmounted
*/

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
// 2. Cleanup function luôn được gọi trước khi component unmounted (setInterval, setTimeout, async, listener event, ...)
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted đầu tiên)

const tabs = ['posts', 'comments','albums', 'photos', 'todos', 'users']

function Content() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    },[type])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }

            // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        // Cleanup function 
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log("removeEventListener..");
        }
    }, [])

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
            {showGoToTop && (
                <button
                    style ={{
                        position:'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content