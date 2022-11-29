import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import "../css/from.css"

function Form() {
    const [name, setName] = useState("");
    const [number, setnumber] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !number) return false;
        dispatch(addContact({id: nanoid(), name, phone_number: number}));
        
        setName("");
        setnumber("");
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='np' type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input className='np' type="number" placeholder='phone number' value={number} onChange={(e) => setnumber(e.target.value)} /><br /><br />
        <button className='btn' onClick={() => handleSubmit()}>Add Contact</button>
      </form>
      {name}  {number}
    </div>
  )
}

export default Form;
