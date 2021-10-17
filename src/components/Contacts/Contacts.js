import ContactsListItem from "./ContactsListItem/ContactsListItem";
import style from './Contacts.module.css'

const Contacts = ({filter, contacts, onDeleteContact}) => {
    
    return (
        <>
            <ul className={style.contactsList}>
                <ContactsListItem 
                    contacts={contacts}
                    filter={filter}
                    onDeleteContact={onDeleteContact}
                />
            </ul>
        </>
    );
}

export default Contacts;