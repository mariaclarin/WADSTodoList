import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function FormPopUp({inputText, setInputText, todos, setTodo}, {...rest}) {
  //to get the input inside the input field
  const inputTextHandler = (event) => {
    console.log(event.target.value)
    setInputText(event.target.value)
  }
  //to submit todos entered in the input field and turn them into items in an array
  const submitTodo = (event) =>{
    setTodo([
      ...todos, {text:inputText, completed:false, id:Math.random()*1000}
    ])
    setInputText("")
  }

  return (
    
    <div>
        <Popup contentStyle={{width:'35%', fontFamily:'sans-serif', color:'#121E2A',  fontSize:'16px'}}trigger=
            {<button style ={{backgroundColor: "#2F4766", fontFamily:'sans-serif', borderColor:'#2F4766', fontSize:'18px', color:'white', borderRadius:'6px', textAlign:'center'}} {...rest}> Add New Todo </button>}
            position="right top">
            <div style={{fontFamily:'sans-serif',  fontSize:'18px', fontWeight:'bold', marginTop:'5px',color:'#121E2A', textAlign:'center'}}>
              Create A Task
            </div>
            <input id='taskname' placeholder="Task Name" onChange={inputTextHandler} style={{width:'98%', height:'30px', borderRadius:'5px', fontFamily:'sans-serif', color:'#121E2A',  fontSize:'17px', marginTop:'10px', marginBottom:'10px'}}type="text" name="name" value={inputText} />
            <input onClick={submitTodo} style={{backgroundColor: "#4C84C8", fontFamily:'sans-serif', marginRight:'5px',borderColor:'#4C84C8', fontSize:'16px', color:'white', borderRadius:'6px', textAlign:'center'}}type="submit" value="Create" />
        </Popup>
        
    </div>
  )
}


export default FormPopUp