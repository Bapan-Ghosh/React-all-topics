import React from 'react'
import { useState } from 'react'

const AddContact = ({addContact}) => {
   const [contactData, setContactData] = useState({name:"",email:""})
   

   const handleChange = (e)=>{
         const key = e.target.name;
         const value = e.target.value;
         
         setContactData((prevData)=>({
            ...prevData,
            [key]: value,
         }))

   }

   const submit = ()=>{
        if(contactData.name === "" || contactData.email === ""){ 
            alert("Please fill all the details :");
            return;
        }
        // console.log(contactData);
        addContact(contactData);
        setContactData({name:"",email:""})
   }

  return (
    <div className='formHeader'>
      <div className='add-contact'>AddContact</div>
      <form action="">
            <label htmlFor="">Name: </label><br />
            <input type="text" name="name" value={contactData.name} onChange={handleChange} placeholder="Enter name : "/><br />
            <label htmlFor="">Email: </label><br />
            <input type="text" name="email" value={contactData.email} onChange={handleChange} placeholder="Enter email : "/><br />
      </form>
      <button onClick={submit}>Add contact</button>

    </div>
  )
}

export default AddContact