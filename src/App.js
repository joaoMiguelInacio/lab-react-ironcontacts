import { useState } from "react";
import React from "react";

import "./App.css";
import Contacts from "./contacts.json";
import ContactItem from "./components/ContactItem";

import Button from "@mui/material/Button";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
          StyledTableCell={StyledTableCell}
          StyledTableRow={StyledTableRow}
        />
      );
    });
  };

  const handleOscars = (name) => {
    const contactsCopy = [...contactsPlaceholder];
    for (const contact of contactsCopy) {
      if (contact.name === name) {
        contact.wonOscar = !contact.wonOscar;
      }
    }
    setContact(contactsCopy);
  };

  const handleEmmys = (name) => {
    const contactsCopy = [...contactsPlaceholder];
    const postCeremonyArray = contactsCopy.map((contact) => {
      if (contact.name === name) {
        if (contact.wonEmmy === true) {
          return { ...contact, wonEmmy: false };
        } else {
          return { ...contact, wonEmmy: true };
        }
      }
      return contact;
    });
    setContact(postCeremonyArray);
  };

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">PICTURE</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  fullWidth
                  endIcon={<ArrowDropDownIcon />}
                  variant="text"
                  color="inherit"
                  onClick={() => handleSortByName()}
                >
                  Name
                </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  fullWidth
                  endIcon={<ArrowDropDownIcon />}
                  variant="text"
                  color="inherit"
                  onClick={() => handleSortByPopularity()}
                >
                  Popularity
                </Button>
              </StyledTableCell>
              <StyledTableCell align="center">OSCAR</StyledTableCell>
              <StyledTableCell align="center">EMMY</StyledTableCell>
            </TableRow>
          </TableHead>
          {displayContacts()}
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
