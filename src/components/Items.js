import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteContact} from '../redux/contactsSlice';
import "../css/list.css"
import {Link} from "react-router-dom";

function Items({item}) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if(window.confirm("are you sure?")){
      dispatch(deleteContact(id))
    }
  }
  return (
    <div style={{backgroundColor:"#4CAF50", borderRadius:"20px", margin:"10px", display:"flex", justifyContent:"space-between"}}>
        <div style={{width:"33%"}}>{item.name} - {item.phone_number}</div>
       <button className='btnList' style={{backgroundColor:"red"}} onClick={() => handleDelete(item.id)}> Delete</button> 
      <Link to={`/${item.id}`}><button className='btnList' style={{backgroundColor:"Blue"}}> Edit</button></Link>
    </div>
  )
}

export default Items;
