import './App.css';
import Contacts from './contacts.json';
import ContactItem from './components/ContactItem';

console.log(Contacts)

let contacts = [Contacts[0], Contacts[1],Contacts[2],Contacts[3],Contacts[4]];

// let contactsCopy = [...Contacts]
// let contacts = contactsCopy.splice(0,5)

console.log(contacts)

function App() {
  const displayContacts = () => {
    return (
      contacts.map((contact) => {
        return (
          <ContactItem
            {...contact}
            //handleDelete={handleDelete}
          />
        )
      })
    )
  }
  return (
    <div className='contacts-list'>
        {
          displayContacts()
        }
      </div>
  )
}

export default App;
