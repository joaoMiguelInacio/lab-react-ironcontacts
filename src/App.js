import { useState } from 'react';
import "./App.css";
import Contacts from "./contacts.json";
import ContactItem from "./components/ContactItem";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

let contactsData = [
  Contacts[0],
  Contacts[1],
  Contacts[2],
  Contacts[3],
  Contacts[4],
];

// let contactsCopy = [...Contacts]
// let contacts = contactsCopy.splice(0,5)

function App() {
  const [contactsPlaceholder, setContact] = useState(contactsData);

  const handleAdd = () => {
    const contactsFiltered = Contacts.filter((element => !contactsPlaceholder.includes(element)));
    const newContact = contactsFiltered[Math.floor(Math.random() * contactsFiltered.length)];
    const contactsCopy = [...contactsPlaceholder];
    contactsCopy.push(newContact);
    setContact(contactsCopy);
  };

  const handleSortByName = () => {
    const contactsCopy = [...contactsPlaceholder];
    console.log(contactsCopy)
    setContact(contactsCopy.sort((contact1, contact2) =>  contact1.name.localeCompare(contact2.name)));
  }

  const handleSortByPopularity = () => {
    const contactsCopy = [...contactsPlaceholder];
    setContact(contactsCopy.sort((contact1, contact2) => contact1.popularity - contact2.popularity))
  }

  const displayContacts = () => {
    return contactsPlaceholder.map((contact) => {
      return (
        <ContactItem
          {...contact}
          handleDelete={handleDelete}
        />
      );
    });
  };

  const handleDelete = (name) => {
    setContact(contactsPlaceholder.filter(contact => contact.name !== name));
  }


  return (
    <div className='page'>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => handleSortByName()}>Sort by name</Button>
        <Button onClick={() => handleSortByPopularity()}>Sort by popularity</Button>
        <Button onClick={() => handleAdd()}>Add Random Contact</Button>
      </ButtonGroup>
      <div className="contacts-list">
        <div className="contact">
          <table className='table'>
            <tr className='table-body'>
                <th className ='table-head'>Picture</th>
                <th className ='table-head'>Name</th>
                <th className ='table-head'>Popularity</th>
                <th className ='table-head'>Oscar</th>
                <th className ='table-head'>Emmy</th>
                <th className ='table-head'>Delete</th>
            </tr>
            {displayContacts()}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
