import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    },
]

function Lesson () {
    const [lessonId, setLessonId] = useState(1)

    // Lắng nghe DOMEvent or CustomEvent
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`,handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style = {{
                            color: lessonId === lesson.id ?
                                'red' :
                                '#333',
                            cursor: 'pointer'
                        }}
                        onClick ={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Lesson