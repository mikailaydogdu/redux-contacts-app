import React from 'react';
import { contactSelectors, deleteAllContact } from '../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Items from './Items';

function List() {
    const contacts = useSelector(contactSelectors.selectAll);
    const dispatch = useDispatch();

    const handleRemoveAll = () => {
      if(window.confirm("are you sure?")){
        dispatch(deleteAllContact());
      }
    }

  return (
    <div>
      <h1>Contacts  ({contacts.length})</h1>
      <button style={{float:"right", padding:"5px"}} onClick={handleRemoveAll}> delete All</button><br /><br />
       {contacts.map((contact) => <Items key={contact.id} item={contact}/>)}
    </div>
  )
}

export default List;
