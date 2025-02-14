import { useDispatch } from "react-redux";
import s from "./SeachBox.module.css";
import { changeContacts } from "../../redux/filtersSlice";
function SeachBox() {
  const dispatch = useDispatch();
  return (
    <div className={s.seachBoxContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          dispatch(changeContacts(e.target.value));
        }}
      />
    </div>
  );
}

export default SeachBox;
