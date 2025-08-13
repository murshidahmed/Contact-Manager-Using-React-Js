import React, { useState } from 'react'

function AddContact({sendDataToParent, contact, setContact}) {

  const [newContact, setNewContact] = useState({name: "", email:""});

  const HandleOnChange = (e) => {
    const {name, value} = e.target;
    setNewContact(prev => ({
      ...prev, [name]: value
    }))
  }

  const HandleOnClick = (e) => {

    e.preventDefault();
    if(newContact.name !== "" || newContact.email !== ""){
      setContact(prev => [...prev, {...newContact, id: Date.now()}]);
      setNewContact({name: "", email: ""});

  
      alert(JSON.stringify([...contact, newContact, updatedContacts]));

    }
    
  }


  


  return (
    <div className="mt-5 m-5">
      
      <form>
        <div className="mb-5">
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={HandleOnChange}
            className="border-1 rounded-md w-140 h-10 p-2"
          />
        </div>
        <div className="mb-5">
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={newContact.email}
            onChange={HandleOnChange}
            className="border-1 rounded-md w-140 h-10 p-2"
          />
        </div>
        <div>
          <button
            onClick={HandleOnClick}
            className="rounded bg-blue-400 w-20 h-10 text-white font-bold text-lg cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact