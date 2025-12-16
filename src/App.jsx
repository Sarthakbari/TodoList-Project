import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  }

  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos, todos)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-4 bg-sky-200 min-h-[80vh] w-[70vw] ">
        <div className="addTodo my-2">
          <h2 className='text-lg font-bold flex justify-center align-middle mb-3'>Add a Todos</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-5 text-sm text-white'>Add</button>
        </div>

        <h2 className='text-lg font-medium mt-3 '>Your Todos</h2>
        <div className="todos">
          {todos.map(item => {
            return <div key={item.id} className="todo flex justify-between w-1/4 my-3">
              <input onChange={handleCheckbox} name={item.id} type="checkBox" value={item.isCompleted} id='' />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-1 text-sm text-white'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-1 text-sm text-white'>Delete</button>
              </div>

            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
