import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  return (
    <div className={styles.loginContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.loginForm}>
          <h3 className={styles.loginTitle}>Login</h3>
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
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <p className={styles.loginText}>
            You do not have an account?
            <Link to="/register" className={styles.loginLink}>
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
