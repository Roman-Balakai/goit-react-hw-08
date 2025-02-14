import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number().required("Required"),
});

function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newContact));
    options.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.formContainer}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" />
          <label htmlFor="number">Number</label>
          <Field type="number" name="number" id="number" />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
