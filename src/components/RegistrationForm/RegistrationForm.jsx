import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div className={styles.registerContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.registerForm}>
          <h3 className={styles.registerTitle}>Register</h3>
          <label>
            <span>Name:</span>
            <Field name="name" className={styles.inputField} />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" className={styles.inputField} />
          </label>
          <label>
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              className={styles.inputField}
            />
          </label>
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
          <p className={styles.registerText}>
            You already have an account?
            <Link to="/login" className={styles.registerLink}>
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
