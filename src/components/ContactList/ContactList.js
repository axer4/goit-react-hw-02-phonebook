import styles from './ContactList.module.css'
function ContactList({ filteredContacts, deleteContact }) {
    return (<ul className = {styles.list}>
        {filteredContacts.map(contact => <li key={contact.id} className = {styles.item}>{contact.name} : {contact.number}
            <button onClick={() => deleteContact(contact.id)} className = {styles.button}> Delete </button>
        </li>)}
    </ul> )
}
    
export default ContactList;