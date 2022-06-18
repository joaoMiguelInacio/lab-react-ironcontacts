import Button from '@mui/material/Button';

export default function ContactItem({ name, pictureUrl, popularity, wonOscar, wonEmmy, handleDelete}) {
    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
            <tr className='table-body'>
                <td><img style={{width:100, height:150 }} src={pictureUrl} alt="no-picture" /></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar ? <p>🏆</p> : <p>🙈</p> }</td>
                <td>{wonEmmy ? <p>🏆</p> : <p>🙈</p>}</td>
                <td><Button onClick={() => handleDelete(name)}>Delete</Button></td>
            </tr>
      )
    } 
  }