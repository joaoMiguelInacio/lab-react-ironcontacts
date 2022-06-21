
import React from 'react';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import CheckboxHandler from "./CheckboxHandler";
import { TableBody } from '@mui/material';

export default function ContactItem({ 
  name, pictureUrl, popularity, wonOscar, wonEmmy, handleDelete, handleOscars, handleEmmys}) {
    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
            <TableBody>
              <tr className='table-body'>
                  <td>
                    <Avatar className='center'
                      variant="rounded"
                      alt={name}
                      src={pictureUrl}
                      sx={{ width: 50, height: 75 }}
                    />
                  </td>
                  <td>{name} <IconButton onClick={() => handleDelete(name)}><DeleteIcon  color="error"/></IconButton></td>
                  <td>{popularity}</td>
                  <CheckboxHandler handleOscars = {handleOscars} handleEmmys = {handleEmmys} wonOscar = {wonOscar}  wonEmmy = {wonEmmy} name = {name}/>
              </tr>
            </TableBody>
      )
    } 
  }