
import { useState } from 'react'

const orders = [100, 200, 300]

function App() {
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
    // setCounter(counter + 1) // khi gọi hàm setCounter thì react gọi lại hàm App (re-render)
    setCounter(prevState => prevState + 1) //Callback
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
