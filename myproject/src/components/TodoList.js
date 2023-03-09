import React from 'react'
import Todo from './Todo'

const TodoList=({todos, setTodo, filteredTodo})=> {
    // const handleCheckboxChange=(id)=>{
    //     const newTodoList =todos.map(todo=>{
    //         if(todo.id===id)return{...todo,done:todo.done}
    //     return todo;
    //     })
    // }
  return (
    <div className="todoCont">
        <ul className='todoList'>
            {filteredTodo.map((todo) => (
                <Todo filteredTodo={filteredTodo} setTodo={setTodo} todos={todos} todo={todo} key={todo.id} text={todo.text} />
            ))}
        </ul>
        
    </div>         
  )
}

export default TodoList