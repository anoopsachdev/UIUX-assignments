import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Hello', // message
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})
// why are the functions just declared, and not defined? (i.e why are they empty)
// the functions you do not define in here (which is createContext)
// you define in the components that you use them. this is the difference between contextapi and redux toolkit
// the functionalities to be used, you will only be writing there name, not there functionality (we will decide its functionalities in the App.jsx or in the component)

export const useTodo = () =>{
    return useContext(TodoContext)
}

// so we do not need to do in the child component 
// const variable = useContext(TodoContext);
// and just
// const variable = useToDo();


export const TodoProvider = TodoContext.Provider

// previously we only shared theme among the components using context api
// what could the data that is being shared about?
// the todos is an array.
// every todo has its own unique ID, a title, completed (true/false)