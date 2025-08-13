import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import { useState } from "react"


function App() {

  const [contact, setContact] = useState([]);

  return (
    <>
      <Header/>
      <AddContact contacts={contact} setContact={setContact}/>
      <ContactList data={contact} contacts={contact} setContact={setContact}/>
    </>
  ) 
}

export default App
