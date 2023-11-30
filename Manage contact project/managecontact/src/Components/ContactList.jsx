import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {
    const {contact,removeContact} = props
    const contactList = contact.map((val,index) =>{
        console.log(contact);
           return(
            <div className='contactList' key={val.id}>
                <div>{val.name}</div>
                <div>{val.email}</div>
               <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
            </div>
           )
    })
  return (
    <>
      <div className='add-contact'>Contact list</div>
      <div >{contactList}</div>
    </>
  )
}

export default ContactList