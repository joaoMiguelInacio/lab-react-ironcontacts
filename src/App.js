import { useState } from "react";
import React from "react";

import "./App.css";
import Contacts from "./contacts.json";
import ContactItem from "./components/ContactItem";

import Button from "@mui/material/Button";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
    const contactsFiltered = Contacts.filter(
      (element) => !contactsPlaceholder.includes(element)
    );
    const newContact =
      contactsFiltered[Math.floor(Math.random() * contactsFiltered.length)];
    const contactsCopy = [...contactsPlaceholder];
    contactsCopy.push(newContact);
    setContact(contactsCopy);
  };

  const handleSortByName = () => {
    const contactsCopy = [...contactsPlaceholder];
    setContact(
      contactsCopy.sort((contact1, contact2) =>
        contact1.name.localeCompare(contact2.name)
      )
    );
  };

  const handleSortByPopularity = () => {
    const contactsCopy = [...contactsPlaceholder];
    setContact(
      contactsCopy.sort(
        (contact1, contact2) => contact1.popularity - contact2.popularity
      )
    );
  };

  const handleDelete = (name) => {
    setContact(contactsPlaceholder.filter((contact) => contact.name !== name));
  };

  const displayContacts = () => {
    return contactsPlaceholder.map((contact) => {
      return (
        <ContactItem
          {...contact}
          handleDelete={handleDelete}
          handleOscars={handleOscars}
          handleEmmys={handleEmmys}
        />
      );
    });
  };

  function handleOscars(name) {
    const contactsCopy = [...contactsPlaceholder];
    contactsCopy.map((contact) => {
    if (contact.name === name) {
        if (contact.wonOscar === true) {
          contact.wonOscar = false;
        } else {
          contact.wonOscar = true;
        }
    }
    });
    setContact(contactsCopy);
  }

  function handleEmmys(name) {
    const contactsCopy = [...contactsPlaceholder];
    contactsCopy.map((contact) => {
      if (contact.name === name) {
        if (contact.wonEmmy === true) {
          contact.wonEmmy = false;
        } else {
          contact.wonEmmy = true;
        }
      }
    });
    setContact(contactsCopy);
  }

  return (
    <div>
      <Fab
        className="fabButton"
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={() => handleAdd()}
      >
        <AddIcon />
        Add Random Contact
      </Fab>
      <div className="contacts-list">
        <div className="contact">
          <table className="table">
            <thead>
              <tr className="table-body">
                <th className="table-head">Picture</th>
                <th className="table-head">
                  <Button
                    fullWidth
                    endIcon={<ArrowDropDownIcon />}
                    variant="text"
                    /*contained, outlined*/ color="inherit"
                    onClick={() => handleSortByName()}
                  >
                    Name
                  </Button>
                </th>
                <th className="table-head">
                  <Button
                    fullWidth
                    endIcon={<ArrowDropDownIcon />}
                    variant="text"
                    color="inherit"
                    /*, success, primary, secondary, info, inherit, error, warning*/ onClick={() =>
                      handleSortByPopularity()
                    }
                  >
                    Popularity
                  </Button>
                </th>
                <th className="table-head">Oscar</th>
                <th className="table-head">Emmy</th>
              </tr>
            </thead>
            {displayContacts()}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
