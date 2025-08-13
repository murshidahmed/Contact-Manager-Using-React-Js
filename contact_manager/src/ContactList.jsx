import React from 'react'
import image from './assets/icons8-trash-64.png'
import profImage from './assets/icons8-profile-50.png'

function ContactList({data, setContact}) {

    const contacts = data;

    const details = contacts.map(contact => <div key={contact.id} className=''>
                                            <div className="flex justify-between items-center">
                                                
                                                <div className="flex">
                                                    <img src={profImage} alt="" className="mr-2"/>
                                                    <div>
                                                        <h2 className="font-semibold text-lg">{contact.name}</h2>
                                                        <p>{contact.email}</p>
                                                    </div>
                                                </div>                                                
                                                <img src={image} onClick={() => HandleRemoveBtn(contact.id)} className="h-6 cursor-pointer"/> 
                                            </div>
                                                <hr className="mt-3 mb-3 border-gray-400"/>

                                            </div>) 

    const HandleRemoveBtn = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContact(updatedContacts)
    }


  return (
    <div>
        <div className="m-5">
            <hr className="mb-3 border-gray-400"/>
            {details}
            
        </div>
    </div>
  )
}

export default ContactList