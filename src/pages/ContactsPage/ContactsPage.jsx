import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SeachBox from "../../components/SeachBox/SeachBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchData } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SeachBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
