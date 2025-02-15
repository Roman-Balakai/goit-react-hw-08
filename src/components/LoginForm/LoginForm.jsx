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
  // const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(loginThunk(values));
    // .unwrap()
    // .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <h3>Login</h3>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
          <p>
            You do not have account?
            <Link to="/register">Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
