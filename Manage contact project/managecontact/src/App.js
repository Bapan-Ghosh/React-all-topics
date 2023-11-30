import { useEffect, useState } from "react";
import uuid4 from "uuid4";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";

function App() {
  const localStorageKey = "contact"
  const [contact,setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
    || []});

  useEffect(()=>{
    //It stores like key value pair here localStorageKey is a key and JSON.stringify(contact) value
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  },[contact])

  const addContact = (data) =>{
    const newContact = { id: uuid4(), ...data };
    setContact([...contact, newContact]);
  }

  const removeContact = (id)=>{
        const updateList = contact.filter((val,index)=>{
          return val.id !== id;
          // mane je gulo id er soman hobe na sei element gulo khali store krbo
        })
        setContact(updateList)
  }

  return(
    <div>
         <Header/>
         <AddContact  addContact={addContact}/>
         <ContactList contact={contact} removeContact={removeContact}/>
    </div>
  ) 
}

export default App;
