// import { useDispatch } from "react-redux";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SeachBox from "./components/SeachBox/SeachBox";
// import { useEffect } from "react";
// import { fetchData } from "./redux/contactsOps";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SeachBox />
//       <ContactList />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
