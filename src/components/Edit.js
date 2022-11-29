import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { contactSelectors, editContact } from '../redux/contactsSlice';
import { useNavigate } from "react-router-dom";

import "../css/from.css"

function Edit() {
  const { id } = useParams();
  const contact = useSelector((state) => contactSelectors.selectById(state, id));
  const [name, setName] = useState(contact.name);
  const [number, setnumber] = useState(contact.phone_number);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name || !number) return false;
    dispatch(editContact({
      id: contact.id,
      changes:{
        name,
        phone_number:number,
      }
    }));
    
    setName("");
    setnumber("");
    navigate('/');
    
}
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input className='np' type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input className='np' type="number" placeholder='phone number' value={number} onChange={(e) => setnumber(e.target.value)} /><br /><br />
        <button className='btn' onClick={() => handleSubmit()}>Edit Contact</button>
      </form>
      {name}  {number}
    </div>
  )
}

export default Edit;
