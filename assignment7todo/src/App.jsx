import { useEffect, useState } from 'react'
import {TodoProvider} from "./contexts"
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const addTodo = (todo) => {
    // setTodos(todo) // all previous todo values would be deleted and only this value would be in array, so we need previous todos
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // in react we do not do server side rendering
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // additional features
  // filtering todos
  const filteredTodos = todos.filter((todo) =>{
    if (filter === "completed") return todo.completed === true;
    else if (filter === "pending") return todo.completed === false;
    return true; // return all
  })

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/> 
              </div>
              {/* filtering: All | Completed | Pending */}
              <div className="flex gap-3 mb-4">
                  <button
                      onClick={() => setFilter("all")}
                      className={`px-3 py-1.5 rounded-lg border border-black/10 bg-white/20 text-white 
                      hover:bg-white/30 duration-150 ${filter === "all" ? "bg-white/40 font-semibold" : ""}`}
                  >
                      All
                  </button>

                  <button
                      onClick={() => setFilter("completed")}
                      className={`px-3 py-1.5 rounded-lg border border-black/10 bg-white/20 text-white 
                      hover:bg-white/30 duration-150 ${filter === "completed" ? "bg-white/40 font-semibold" : ""}`}
                  >
                      Completed
                  </button>

                  <button
                      onClick={() => setFilter("pending")}
                      className={`px-3 py-1.5 rounded-lg border border-black/10 bg-white/20 text-white 
                      hover:bg-white/30 duration-150 ${filter === "pending" ? "bg-white/40 font-semibold" : ""}`}
                  >
                      Pending
                  </button>
              </div>

              <div className="flex flex-wrap gap-y-3">
                  {filteredTodos.map((todo) => (
                    <div key={todo.id}
                    className='w-full'>
                      <TodoItem todo = {todo} />
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
