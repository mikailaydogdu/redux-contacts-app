import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

export const  contactSelectors = contactAdaptor.getSelectors((state)  => state.contacts);

const contactsSlice= createSlice({
    name:"contacts",
    initialState,
    reducers:{
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
        deleteContact: contactAdaptor.removeOne,
        deleteAllContact: contactAdaptor.removeAll,
        editContact: contactAdaptor.updateOne,
    },
})

export const {addContact, addContacts, deleteContact, deleteAllContact, editContact} = contactsSlice.actions;
export default contactsSlice.reducer;