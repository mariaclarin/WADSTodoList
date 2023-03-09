import React from 'react'

const Todo = ({text, todos, todo, setTodo}) => {
    const deleteHandler =() =>{
        setTodo(todos.filter((el) => el.id !== todo.id))
    }


    const completeHandler = (event) =>{
        console.log(todo.completed)
        setTodo(todos.map(item=>{
            if(item.id === todo.id){
                return{
                    ...item, completed:!item.completed
                }
                
            }
            return item;
        }))
    }



    return (
        <div className='todo'>
            <div className='checkboxCont'>
                <input onChange={completeHandler} className='checkbox' type="checkbox" id="accept"></input>
            </div>
            <li className={`todoItem ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={deleteHandler} className='trashBtn'>Delete</button>

        </div>
    )
}

export default Todo