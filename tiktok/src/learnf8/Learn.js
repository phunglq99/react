// import Content from './Content'
// import Time from './Time'
// import Avatar from './Avatar'
// import Lesson from './Lesson'

// import MemoHOC from './MemoHOC'

/*Hook */
// import UseLOE from './hooks/UseLOE';
// import UseRef from './hooks/UseRef';
// import UseMemo from './hooks/UseMemo';

import { useState } from 'react'
// import Todo from "./hooks/UseReducer/Todo"
import UseContext from "./hooks/UseContext"
// const orders = [100, 200, 300]

function Learn() {
/* : Counter
  // So sánh performance với callback function khi add vào initState
  // const total = orders.reduce((acc, item) => acc + item);
  // const  [counter, setCounter] = useState(total)
  // console.log('re-render');

    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((acc, item) => acc + item);
        console.log(total);
        return total //initState là khi return giá trị total
    }) // initState với calllback giúp tăng performance

    const handleIncrease = () => {
        // setCounter(counter + 1) // khi gọi hàm setCounter thì react gọi lại hàm Learn (re-render)
        setCounter(prevState => prevState + 1) //Callback
    }

    return (
        <div className="Learn">
        <h1>{counter}</h1>
        <button onClick = {handleIncrease}>Increase</button>
        </div>
    );
*/

// -------------------------------------------------------------------------
/* Update info 
    const [info, setInfo] = useState ({
        name: 'Nguyen Van A',
        age: 18,
        address: 'Ha Noi, VN'
    })


    const handleUpdate = () => {
        setInfo(prevInfo => {
            // logic ....

            return {
                ...prevInfo,
                bio: ' Yêu màu hồng ^^'
            }
        })
    }


    return (
        <div className="Learn">
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
*/

// -------------------------------------------------------------------------
/*Two-way Binding
    // Random Gift
    const gifts = [
        'CPU i9',
        'RAM 32GB RGB',
        'RGB Keyboard'
    ]

    const [gift, setGift] = useState()

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index])
    }

    return (
        <div className="Learn" style={{padding: 32}}>
            <h1>{gift || 'Chưa có Phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy thưởng</button>
        </div>
    )

    //--------------Two-way Binding--------------

    // const [ name, setName] = useState('')
    // const [ email, setEmail] = useState('')

    // const handleSubmit = () => {
    //     //Call API

    //     console.log({
    //         name,
    //         email
    //     })
    // }

    // return (
    //     <div className="Learn" style={{padding: 32}}>
    //         <input
    //             value={name}
    //             onChange={e => setName(e.target.value)} />
    //         <input
    //             value={email}
    //             onChange={e => setEmail(e.target.value)} />
    //         <button onClick={handleSubmit}>Register</button>
    //     </div>
    // )

    
    //--------------Response from API--------------

    const courses = [
        {
            id: 1,
            name: 'HTML, CSS'
        },
        {
            id: 2,
            name: 'JS'
        },
        {
            id: 3,
            name: 'ReactJS'
        }
    ]

    //---------Checked radio-----------------
    // const [checked, setChecked] = useState(3)

    // const handleSubmit = () => {
    //     //Call API 
    //     console.log({
    //         id: checked
    //     })
    // }

    // return (
    //     <div className="Learn" style={{ padding:32 }}>
    //         {courses.map(course => {
    //             return (
    //                 <div key={course.id}>
    //                     <input 
    //                         type="radio"
    //                         checked={checked === course.id}
    //                         onChange={() => setChecked(course.id)}
    //                     />
    //                     {course.name}
    //                 </div>
    //             )
    //         })}
    //         <button onClick={handleSubmit}>Register</button>
    //     </div>
    // )

    //---------Checked checkbox-----------------
    const [checked, setChecked] = useState([])
    console.log(checked)

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)

            if (isChecked) {
                //Uncheck
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const handleSubmit = () => {
        //Call API 
        console.log({
            ids: checked
        })
    }


    return (
        <div className="Learn" style={{ padding:32 }}>
            {courses.map(course => {
                return (
                    <div key={course.id}>
                        <input 
                            type="checkbox"
                            checked={checked.includes(course.id)}
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )

    //-----------------Todo List ---------------------

    const storeageJobs = JSON.parse(localStorage.getItem('jobs'))

    const [job, setJob] = useState('')
    console.log(storeageJobs);
    const [jobs, setJobs] = useState(storeageJobs ?? []) // ??: null or undefined sẽ lấy giá trị sau

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs =  [...prev, job];

            const jsonJobs = JSON.stringify(newJobs);

            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })
        setJob('')


    }

    return (
        <div className="Learn" style={{padding: 32}}>
            <input
                type="text"
                value={job}
                onChange= {e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>{job}</li>
                    )
                })}
            </ul>
        </div>
    )
 */

// ------------------------------------------------------------------
/* Mounted & unmounted

    const [show, setShow] = useState(false)

    return (
        <div className="Learn" style={{padding: 20}}>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    )
*/

// ------------------------------------------------------------------
/* useEffect*/
    const [show, setShow] = useState(false)
    return (
        <div className="Learn" style={{padding: 20}}>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {/* {show && <Content/>} */}
            {/* {show && <Time />} */}
            {/* {show && <Avatar />} */}
            {/* {show && <Lesson />} */}

            {/* {show && <MemoHOC />} */}

            {/* Hooks */}
            {/* {show && <UseLOE />} */}
            {/* {show && <UseRef />} */}
            {/* {show && <UseMemo />} */}
            {/* {show && <UseReducer />} */}
            {/* {show && <Todo />} */}
            {show && <UseContext />}

        </div>
    )
}

export default Learn;
