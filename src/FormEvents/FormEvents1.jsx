
import React, { useEffect, useState } from 'react'

function FormEvents1() {
 
    const [data, setdata] = useState('')
    const [update, setUpdate] = useState ('Hi! Harsha')

    const changeHandler = (e)=> {
        setdata(e.target.value)
    }
    
    const Form = (event)=> {
        event.preventDefault()
        setUpdate(data)
        setdata('')
    }

  return (
    <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '65vh',
            backgroundColor: '#f0f0f0'
        }}>

      <div style={{
          backgroundColor: 'lightgrey',
          boxShadow: '0 4px 5px black',
          height: 'auto',
          width: '300px',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '10px'
      }}>

        <form onSubmit={Form} style={{margin:'-10px', padding:'10px'}}>
          <input type ="text" placeholder='Enter Your Name' required value={data} onChange={changeHandler} style={{fontSize:'16px', fontWeight:'bold', margin:'15px', padding:'5px', border:'2px solid red', borderRadius:'10px', textAlign:'center'}}/>
          <input type ='submit' style={{border:'2px solid blue', fontSize:'15px', padding:'4px', width:'60%', borderRadius:'10px', cursor:'pointer'}}/>
        </form><br/>
        <h2 style={{fontSize:'15px', color:'black', fontWeight:'bold', padding:'6px', border:'2px solid black', borderRadius:'8px', maxWidth:'300px'}}>{update}</h2>
      </div>
    </div>
  )
}

export default FormEvents1 

