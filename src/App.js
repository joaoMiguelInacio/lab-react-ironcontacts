import { useState } from 'react';
import "./App.css";
import Contacts from "./contacts.json";
import ContactItem from "./components/ContactItem";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

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
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableCell>Picture</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Popularity</TableCell>
                <TableCell>Oscar</TableCell>
                <TableCell>Emmy</TableCell>
                <TableCell>Delete</TableCell>
            </TableHead>
            {displayContacts()}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
