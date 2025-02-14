import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contactsSlice";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={s.listItem}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
    </>
  );
}

export default ContactList;
