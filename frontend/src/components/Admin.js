import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import Chips from "react-chips";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import axios from "../axios";

function Admin() {
  const [faqs, setfaqs] = useState([]);
  const [open, setOpen] = useState(false);
  const [chips, setChips] = useState([]);
  const [faq, setFaq] = useState({});
  const [login, setlogin] = useState(true);
  const [refresh, setrefresh] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
      let config = {
        headers: {
          email: values.email,
          password: values.password,
        },
      };
      axios
        .post("/api/v1/auth/login", {}, config)
        .then((res) => {
          localStorage.setItem("admintoken", res.data.token);
          setlogin((prev) => !prev);
        })
        .catch((err) => {
          console.log(err);
          setMessage("INVALID CREDENTIALS");
          setTimeout(() => {
            setMessage("");
          }, 5000);
        });
    },
  });

  const particularFaq = (ids) => {
    axios
      .get(`/api/v1/faq/${ids}`)
      .then((res) => {
        setFaq(res.data);
      })
      .catch((error) => console.log(error));

    onOpenModal();
  };

  const updateFaq = (ids) => {
    if (!ids) {
      let config = {
        headers: {
          accesstoken: localStorage.getItem("admintoken"),
        },
      };
      let body = {
        question: faq.question,
        answer: faq.answer,
        tags: chips,
      };
      axios
        .post(`/api/v1/faq`, body, config)
        .then((res) => {
          onCloseModal();
        })
        .catch((error) => console.log(error));
    } else {
      let config = {
        headers: {
          accesstoken: localStorage.getItem("admintoken"),
        },
      };
      let body = {
        question: faq.question,
        answer: faq.answer,
        tags: chips,
      };
      axios
        .put(`/api/v1/faq/${ids}`, body, config)
        .then((res) => {
          setrefresh(!refresh);
          onCloseModal();
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("admintoken")) {
      setlogin((prev) => !prev);
    }

    let config = {
      headers: {
        accesstoken: localStorage.getItem("admintoken"),
      },
    };

    axios
      .get("/api/v1/faq/tags", {}, config)
      .then((res) => setSuggestions(res.data.tags))
      .catch((error) => console.log(error));

    axios
      .get("/api/v1/faq?type=Unanswered", {}, config)
      .then((res) => setfaqs(res.data))
      .catch((error) => console.log(error));
  }, [refresh]);

  const logout = () => {
    setlogin(true);
    localStorage.removeItem("admintoken");
  };

  const addFaq = () => {
    onOpenModal();
  };

  return (
    <Container>
      {login ? (
        <SignupContainer>
          <SignupHeader>ADMIN FORM</SignupHeader>
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
              <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
            </form>
          </InputContainer>
        </SignupContainer>
      ) : (
        <Container>
          <Header>
            <Heading>UNANSWERED FAQS</Heading>
            <LogOutButton onClick={logout}>LOG OUT</LogOutButton>
          </Header>
          <Orders>
            {faqs.map(({ question, _id }) => (
              <Row
                onClick={() => {
                  particularFaq(_id);
                }}
              >
                <div>{question}</div>
              </Row>
            ))}
          </Orders>
          <AddFaqButton onClick={addFaq}>ADD FAQ</AddFaqButton>
        </Container>
      )}

      <Modal open={open} onClose={onCloseModal} center>
        <ModalContainer>
          <ModalHeading>FAQ Form</ModalHeading>

          <input
            placeholder="Question"
            value={faq.question}
            onChange={(e) => setFaq({ ...faq, question: e.target.value })}
          />
          <input
            placeholder="Answer"
            value={faq.answer}
            onChange={(e) => setFaq({ ...faq, answer: e.target.value })}
          />
          <Chips
            className="chipsm"
            value={chips}
            onChange={(chips) => setChips(chips)}
            suggestions={suggestions}
          />
          <SubmitButton onClick={() => updateFaq(faq._id)}>Submit</SubmitButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Admin;

const Container = styled.div`
  font-size: 18px;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 35px;
`;

const Heading = styled.h1`
  margin-top: 15px;
`;

const Orders = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border: 1px solid lightgray;
  :hover{
    box-shadow: 0 1px 9px 0 lightgrey;
    cursor:pointer;
  }
}
`;

const SignupContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  margin: 9% auto;
  box-shadow: 0 1px 5px 0 lightgrey;
  border-radius: 6px;
`;

const SignupHeader = styled.h1`
  margin-top: 44px;
  margin-bottom: 46px;
  letter-spacing: 0.3px;
  font-size: 36px;
  font-weight: 600;
  color: #44475b;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const ModalContainer = styled.div`
  width: 500px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  input {
    width: 80%;
    margin-bottom: 15px;
    padding: 9px 13px;
    border: 1px solid #7f7777;
    border-radius: 5px;
    outline-color: #00d09c;
    font-size: 17px;
  }
  div{
      width:80%;
      border: 1px solid #7f7777 !important;
      outline-color: #00d09c;
      div{
          width:auto;
          border:none !important;
          outline:none;
      }
  }
  }
`;

const ModalHeading = styled.h1`
  margin-top: 31px;
  margin-bottom: 22px;
  font-size: 32px;
`;

const SubmitButton = styled.button`
  height: 42px;
  width: 80%;
  color: white;
  background-color: #00d09c;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
`;

const LogOutButton = styled.button`
  height: 42px;
  width: 10%;
  color: white;
  background-color: #00d09c;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  position: absolute;
  right: 120px;
  top: 26px;
`;

const AddFaqButton = styled.button`
  height: 44px;
  width: 23%;
  color: white;
  background-color: #00d09c;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
`;

const Header = styled.div``;
