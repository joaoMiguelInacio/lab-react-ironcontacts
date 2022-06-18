import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import Button from '@mui/material/Button';

export default function ContactItem({ name, pictureUrl, popularity, wonOscar, wonEmmy, handleDelete}) {
    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
            <TableBody>
                <TableCell><img style={{width:100, height:150 }} src={pictureUrl} alt="no-picture" /></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{popularity}</TableCell>
                <TableCell>{wonOscar ? <p>🏆</p> : <p>🙈</p> }</TableCell>
                <TableCell>{wonEmmy ? <p>🏆</p> : <p>🙈</p>}</TableCell>
                <TableCell><Button onClick={() => handleDelete(name)}>🗑</Button></TableCell>
            </TableBody>
      )
    } 
  }