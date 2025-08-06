
import React from 'react'

function Counter() {
    const [count, setCount] = useState(0)
      return (
        <div>
         <h1 style={{textAlign:'center', color:'red', textDecoration:'none'}}></h1><hr/>
          <h3>Count:{count}</h3>
          <button onClick={()=>
            setCount(count + 1)
          }>+</button>
          <button onClick={()=>
            setCount(Math.max(0, count-1))
          }>-</button>
        </div>
      )
    }

export default Counter