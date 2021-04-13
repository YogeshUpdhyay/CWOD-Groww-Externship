import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <Container>
      <Col>
        <h2>
          Trusted by Millions of Indians. Start Investing <br /> today.
        </h2>
        <Link to="/stocks">
          <SubmitButton>Get Started</SubmitButton>
        </Link>
      </Col>
      <ColContainer>
        <ColWrapper>
          <Card>
            <img
              src="https://assets-netstorage.groww.in/website-assets/prod/1.5.2/build/client/images/mfHome.af668dea.svg"
              alt={"funds"}
            />
            <h2>Mutual Funds</h2>
          </Card>
          <Card>
            <img
              src="https://assets-netstorage.groww.in/website-assets/prod/1.5.2/build/client/images/optionHome.5e98a896.svg"
              alt={"future & options"}
            />
            <h2>Future & Options</h2>
          </Card>
          <Card>
            <img
              src="https://assets-netstorage.groww.in/website-assets/prod/1.5.2/build/client/images/goldHome.1c51c78f.svg"
              alt={"gold"}
            />
            <h2>Gold</h2>
          </Card>
        </ColWrapper>
        <ColWrapper>
          <Card>
            <img
              src="https://assets-netstorage.groww.in/website-assets/prod/1.5.2/build/client/images/stockHome.af2af225.svg"
              alt={"stocks"}
            />
            <h2>Stocks</h2>
          </Card>
          <Card>
            <img
              src="https://assets-netstorage.groww.in/website-assets/prod/1.5.2/build/client/images/usHome.fcb18f99.svg"
              alt={"USstocks"}
            />
            <h2>Us Stocks</h2>
          </Card>
          <Card>
            <img
              src="https://assets-netstorage.groww.in/website-assets/prod/1.5.2/build/client/images/fdHome.ba2c5441.svg"
              alt={"FD"}
            />
            <h2>Fixed depostis</h2>
          </Card>
        </ColWrapper>
      </ColContainer>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-right: 12%;
  display: flex;
  height: 80vh;
`;

const Col = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: start;
`;

const ColContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  text-align: start;
`;

const SubmitButton = styled.button`
  height: 54px;
  width: 180%;
  color: white;
  background-color: #00d09c;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-top: 21px;
`;

const Card = styled.div`
  width: 200px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 20px;
  margin-right: 15px;
  box-shadow: 3px 6px 24px rgb(0 0 0 / 12%);
  align-items: center;
  margin-bottom: 20%;
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 30px;
  }
`;

const ColWrapper = styled.div``;
