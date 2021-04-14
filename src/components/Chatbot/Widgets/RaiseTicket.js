import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import axios from "../../../axios";

function RaiseTicket() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [message, setMessage] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const SubmitForm = () => {
    if (!localStorage.getItem("accesstoken")) {
      setMessage("Login To Raise Ticket");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }

    let config = {
      headers: {
        accesstoken: localStorage.getItem("accesstoken"),
      },
    };
    let body = {
      question: question,
    };

    axios.post("/api/v1/faq", body, config).then((res) => {
      setMessage("Successfully Added");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setQuestion(null);
      onCloseModal();
    });
  };
  return (
    <Container>
      <p>Couldn't find any relavent FAQs</p>
      <Button onClick={onOpenModal}>Raise Ticket</Button>
      <Modal open={open} onClose={onCloseModal} center>
        <ModalContainer>
          <ModalHeading> Form </ModalHeading>
          <input
            value={question}
            placeholder="Question"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <SubmitButton onClick={SubmitForm}>Submit</SubmitButton>
          {message}
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default RaiseTicket;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;
const Button = styled.button`
  border-radius: 25px;
  padding: 8px;
  border: 1px solid #173e3f;
  color: #1d1d1d;
  font-size: 0.8rem;
  margin: 4px 4px;
  background: transparent;
  cursor: pointer;
  outline: none;
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
    border: 1px solid #7F7777;
    border-radius: 5px;
    outline-color: #00D09C;
    font-size: 17px;
  }
  div{
      width:80%;
      border: 1px solid #7F7777 !important;
      outline-color: #00D09C;
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
