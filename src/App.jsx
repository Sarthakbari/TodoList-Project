import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-sky-200 min-h-[80vh] w-[70vw] ">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold flex justify-center align-middle mb-3'>Add a Todos</h2>
          <input type="text" className='w-1/2' />
          <button className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-5 text-sm text-white'>Add</button>
        </div>

        <h2 className='text-lg font-medium mt-3 '>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-1 text-sm text-white'>Edit</button>
              <button className='bg-sky-800 rounded-xl hover:bg-sky-950 py-1 p-2 mx-1 text-sm text-white'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
