
// import React, { useState } from 'react'
// import './TodoList1.css'

// function TodoList1() {

//   const [input, setInput] = useState('')
//   const [TodoList, setTodoList] = useState([])
//   const [Editid, setEditId] = useState(null)
//   const [EditText, setEditText] = useState('')
 
//   const AddTodo = ()=> {

//     if(input === '') return
//     const Item = {
//       id: Date.now(),
//       text: input,
//       completed: false
//     }
//     setTodoList((prev)=> [...prev, Item])
//     setInput('')
//   }

//   const Edit = (item)=> {
//       setEditId(item.id)
//       setEditText(item.text)
//   }

//   const Save = (id)=> {
//       setTodoList(TodoList.map(i=>i.id === id ? {...i, text:EditText}: i))
//       setEditId(null)
//   }

//   const deleteTodo = (id)=> {
//      setTodoList(TodoList.filter((i)=>i.id !== id))
//   }

//   const Cancel = ()=> {
//     setEditId(null)
//   }

//   return (
//     <div>
//       <input type='text' className='Input' placeholder='Enter Your Task' value={input} onChange={(e)=>setInput(e.target.value)}/>
//       <button className='btn-AddTask' onClick={()=>AddTodo()}>Add Task</button>
//       <ul className='Ul'>
//        {TodoList.map((item)=>(
//         <li key={item.id}>
//          {Editid === item.id ? (
//          <>
//           <input type ='text' className='Input' placeholder ='Update Task' value={EditText} onChange={(e)=>setEditText(e.target.value)}/>
//           <button className='Save' onClick={()=>Save(item.id)}>Save</button>
//           <button onClick={Cancel}>Cancel</button>
//          </>
//         ) : (
//         <>
//         <span className='Input1'>{item.text}</span>
//         <button className='Edit' onClick={()=>Edit(item)}>Edit</button>
//         <button onClick={()=>deleteTodo(item.id)}>Delete</button>
//         </>
//       )}
//         </li>
//        ))}
//       </ul>
//     </div>
//   )
// }

// export default TodoList1



import React, {useState} from 'react'

function TodoList1() {

  const [input, setInput] = useState('')
  const [Todo, setTodo] = useState([])
  const [Editid, setEditId] = useState(null)
  const [EditText, setEditText] = useState('')

  const AddTodo = ()=> {
    if(input === '') return

     const Item = {
      id: Date.now(),
      text: input,
      completed: false
     }
     setTodo((prev) => [...prev, Item])
     setInput('')
  }

  const Edit = (item)=> {
    setEditId(item.id)
    setEditText(item.text)
  }

  const Save = (id)=> {
    setTodo(Todo.map(i=>i.id === id ? {...i, text:EditText}: i))
    setEditId(null)
  }

  const DeleteTodo = (ids)=> {
    setTodo(Todo.filter((i)=>i.id !==ids))
  }

  const Cancel = ()=> {
    setEditId(null)
  }

  return (
    <div>
      <input type='text' placeholder='Enter Your Name' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>AddTodo()}>Add Task</button>
      <ul>
        {Todo.map((item)=>(
        <li key ={item.id}>
        {Editid === item.id ? (
          <>
           <input type= "text" placeholder='Enter Your Task' value ={EditText} onChange={(e)=> setEditText(e.target.value)}/> 
           <button onClick= {()=>Save(item.id)}>Save</button>
           <button onClick= {Cancel}>Cancel</button>
          </> 
        ):(
        <>
        <span>{item.text}</span>
         <button onClick= {()=>Edit(item)}>Edit</button>
         <button onClick= {()=>DeleteTodo(item.id)}>Delete</button>
        </>)}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList1


