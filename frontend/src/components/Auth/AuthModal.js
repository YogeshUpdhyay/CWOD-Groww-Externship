import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Modal } from "react-responsive-modal";
import Login from "./Login";
import Signup from "./Signup";

function AuthModal({ open, onCloseModal, setIsUSerLogged }) {
  const [login, setlogin] = useState(false);

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <ModalContainer>
        <ImgContainer>
          <img
            src="https://assets-netstorage.groww.in/website-assets/prod/1.4.3/build/client/images/patternImg.0edf5760.svg"
            alt="animation"
          />
          <TextWrapper>
            <h1>Simple, Free</h1>
            <h1>Investing.</h1>
            <LineAnimation></LineAnimation>
            <FadeInContainer>
              <div>Stocks</div>
              <div>Direct Mutual Funds</div>
              <div>EFTs</div>
              <div>Gold</div>
              <div>US Stocks</div>
              <div>Fixed Deposits</div>
            </FadeInContainer>
          </TextWrapper>
        </ImgContainer>
        {login ? (
          <Login
            setlogin={setlogin}
            setIsUSerLogged={setIsUSerLogged}
            onClose={onCloseModal}
          />
        ) : (
          <Signup
            setlogin={setlogin}
            setIsUSerLogged={setIsUSerLogged}
            onClose={onCloseModal}
          />
        )}
      </ModalContainer>
    </Modal>
  );
}

export default AuthModal;

const ModalContainer = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  height: 475px;
  position: realtive;

  img {
    height: 475px;
    object-fit: contain;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: 40px;
  color: white;
  font-size: 17px;

  h1 {
    color: white;
    margin-top: 0;
    margin-bottom: 0px;
    font-weight: 600;
  }
`;

const widthAnimation = keyframes`
  0% {
    width:1%;
  }

  100%{
    width:30%;
  }
`;

const LineAnimation = styled.div`
  margin-top: 212px;
  margin-left: 1px;
  height: 8px;
  width: 1%;
  background: white;
  animation: ${widthAnimation} 1.5s ease-in-out infinite alternate;
  position: relative;
`;

const FadeAnimation = keyframes`
0% {opacity: 0; height: auto;}
9% {opacity: 1;}
18% {opacity: 0; height: 0px;}
100% {opacity: 0; height: 0px;}
`;

const FadeInContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  margin-top: 8px;

  div {
    font-size: 30px;
    color: white;
    opacity: 0;
    height: 0px;
    font-weight: 600;
  }

  div:nth-child(1) {
    animation: ${FadeAnimation} 18s infinite;
  }
  div:nth-child(2) {
    animation: ${FadeAnimation} 18s infinite;
    animation-delay: 3s;
  }
  div:nth-child(3) {
    animation: ${FadeAnimation} 18s infinite;
    animation-delay: 6s;
  }
  div:nth-child(4) {
    animation: ${FadeAnimation} 18s infinite;
    animation-delay: 9s;
  }
  div:nth-child(5) {
    animation: ${FadeAnimation} 18s infinite;
    animation-delay: 12s;
  }
  div:nth-child(6) {
    animation: ${FadeAnimation} 18s infinite;
    animation-delay: 15s;
  }
`;
