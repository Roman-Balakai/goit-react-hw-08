import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";
function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.userContainer}>
        <p>
          <span className={s.userIcon}>
            <FaUser />
          </span>
          {name}
        </p>
        <p>
          <span className={s.userIcon}>
            <BsFillTelephoneFill />
          </span>
          {number}
        </p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </>
  );
}

export default Contact;
