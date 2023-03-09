import React from 'react'

const SelectBtn= ({setStatus}) => {
    const statusHandler =(event) =>{
        setStatus(event.target.value)
    }
    return(
        <select onChange={statusHandler} style={{backgroundColor:"#516682",fontFamily:'sans-serif', borderColor:'black', fontSize:'18px', color:'white', borderRadius:'4.5px'}}>
            <option value='all'>View All </option>
            <option value='uncompleted'>Uncompleted</option>
            <option value='completed'>Completed</option>
        </select>
    )
}
export {SelectBtn};
