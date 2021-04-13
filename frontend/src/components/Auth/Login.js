import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import * as actions from "../../redux/action";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

function Login({ setlogin, setIsUSerLogged, onClose, onAuth, error }) {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("email->", values.email);
      console.log("password->", values.password);
      onAuth(values.email, values.password, setIsUSerLogged, onClose);
      console.log("going");
      // setIsUSerLogged((prev) => !prev);
      // onClose((prev) => !prev);
    },
  });

  return (
    <LoginContainer>
      <LoginHeader>Welcome to Groww</LoginHeader>

      <InputContainer>
        <form onSubmit={formik.handleSubmit} autocomplete="off">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Your Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Enter Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </InputContainer>

      <SignupLinkContainer>
        New here? Click here to{" "}
        <SignupLink onClick={() => setlogin((prev) => !prev)}>
          create an account
        </SignupLink>
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      </SignupLinkContainer>
    </LoginContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, setIsUSerLogged, onClose) =>
      dispatch(actions.authLogin(email, password, setIsUSerLogged, onClose)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const LoginContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 475px;
`;

const LoginHeader = styled.h1`
  margin-top: 54px;
  margin-bottom: 40px;
  letter-spacing: 0.3px;
  font-size: 36px;
  font-weight: 600;
  color: #44475b;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const SignupLink = styled.span`
  cursor: pointer;
  font-weight: 800;
  :hover {
    color: #00d09c;
    text-decoration: underline;
  }
`;

const SignupLinkContainer = styled.div`
  margin-top: 9px;
`;
