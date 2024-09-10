import React from 'react'
import TodoList from './components/TodoList'
import TodoListWQuery from './components/TodoListWQuery'
import TodoListWQueryHook from './components/TodoListWQueryHook'

const App = () => {
  return (
    <>
      <h1>ToDo List</h1>
      {/* <TodoList/> */}
      {/* <TodoListWQuery/> */}
      <TodoListWQueryHook />
    </>
  )
}

export default App