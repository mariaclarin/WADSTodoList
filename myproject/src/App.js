import './App.css';
import PageHeader from './components/PageHeader';
import PageTitle from './components/PageTitle';
import { SelectBtn } from './components/Button';
import FormPopUp from './components/FormPopUp';
import TodoList from './components/TodoList';
import React, { useState , useEffect} from 'react';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] =useState("all")
  const [filteredTodo, setFilteredTodo]= useState([])
  
  useEffect(()=>{
    filterHandler ()
  }, [todos, status])

  const filterHandler =()=>{
    switch(status){
      case 'completed':
        console.log(todos)
        console.log('complete')
        setFilteredTodo(todos.filter(todo =>todo.completed ===true ))
        break
      case 'uncompleted':
        console.log(todos)
        console.log('uncompleted')
        setFilteredTodo(todos.filter(todo =>todo.completed ===false ))
        break
      default:
        console.log(todos)
        setFilteredTodo(todos)
        break
      }
  }

  return (
    <div className="App">
      <div className='Title'><PageTitle className='Title' title='mustdo'/></div>
      <div className='header'> <PageHeader className="header" text= 'A simple to do list for you to finish, by Maria Clarin (2501990331) L4AC.'/></div>
      <div className='buttoncont'>
        <FormPopUp inputText={inputText} todos={todos} setTodo={setTodo} setInputText = {setInputText} />
        <div className='btnright'>
          <SelectBtn  setStatus={setStatus} id="status"></SelectBtn>
        </div>
      </div>
      <TodoList filteredTodo={filteredTodo} setTodo={setTodo} todos={todos} />


      
    </div>

  );
}

export default App;
