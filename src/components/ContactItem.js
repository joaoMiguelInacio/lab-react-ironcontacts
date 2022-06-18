export default function ContactItem({ name, pictureUrl, popularity, wonOscar, wonEmmy}) {
    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div className='contact' >
          <img src={pictureUrl} alt="no-picture" />
          <p>name: {name}</p>
          <p>popularity: {popularity}</p>
          {wonOscar && <p>Oscars awarded 🙌</p>}
          {wonEmmy && <p>Oscars awarded 🙌</p>}
          {/* <button onClick={() => handleDelete(id)}>Delete movie 🗑</button> */}
        </div>
      )
    } 
  }