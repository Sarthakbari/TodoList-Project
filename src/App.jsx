import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
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
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-4 bg-sky-200 min-h-[80vh] w-[70vw] ">
        <div className="addTodo my-2">
          <h2 className='text-lg font-bold flex justify-center align-middle mb-3'>Add a Todos</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 ' />
          <button onClick={handleAdd} className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-5 text-sm text-white'>Add</button>
        </div>

        <h2 className='text-lg font-medium mt-3 '>Your Todos:-</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-4'>No Todos to Display....</div>}
          {todos.map(item => {
            return <div key={item.id} className="todo flex justify-between w-1/2 my-3">
              <div className='flex gap-5'>
                <input onChange={handleCheckbox} name={item.id} type="checkBox" value={item.isCompleted} id='' />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-1 text-sm text-white'>Edit</button>
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
