
import React from 'react';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Checkbox from '@mui/material/Checkbox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

export default function ContactItem({ name, pictureUrl, popularity, wonOscar, wonEmmy, handleDelete}) {
    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
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
                <td>
                  {
                    wonOscar ?  
                    <p>
                      <Checkbox 
                        icon={<EmojiEventsOutlinedIcon fontSize="large"/>} 
                        checkedIcon={<EmojiEventsIcon fontSize="large" color="warning"/>} 
                        defaultChecked 
                      />
                    </p> 
                    : <p>
                        <Checkbox  
                          icon={<EmojiEventsOutlinedIcon fontSize="large"/>}
                          checkedIcon={<EmojiEventsIcon fontSize="large" color="warning"/>} 
                        />
                      </p> 
                  }
                </td>
                <td>
                  {
                    wonEmmy ?  
                    <p>
                      <Checkbox 
                        icon={<EmojiEventsOutlinedIcon fontSize="large"/>} 
                        checkedIcon={<EmojiEventsIcon fontSize="large" color="warning"/>} 
                        defaultChecked 
                      />
                    </p> 
                    : <p>
                        <Checkbox  
                          icon={<EmojiEventsOutlinedIcon fontSize="large"/>}
                          checkedIcon={<EmojiEventsIcon fontSize="large" color="warning"/>} 
                        />
                      </p> 
                  }
                </td>
            </tr>
      )
    } 
  }