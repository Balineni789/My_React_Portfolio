
import React from 'react'
import { useState } from 'react'

function FormEvents() {

const [Data, setData] = useState('');

const [submit, setSubmit] = useState()

const ChangeData = (event) => {
    setData(event.target.value)
}

const Submit = (e) => {
  e.preventDefault()
    setSubmit(Data)
}

const reset = (e) => {
  e.preventDefault()
  setData('')
  setSubmit('')
}

  return (
    <div>
      <h3 className='H3'>Hi, {submit}</h3>
       <form onSubmit={Submit}>
        <div className='Form'>
         <input type ='text' placeholder ='Enter Your Name' value ={Data} onChange={ChangeData}/><br/>
         <input type ='submit'/>
          <button onClick={reset}>Reset</button>
        </div>
       </form>
    </div>
  )
}

export default FormEvents;