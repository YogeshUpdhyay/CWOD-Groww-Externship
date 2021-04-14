import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FundDescription({ match }) {
  const [fund, setfund] = useState(null);
  let { fundname } = useParams();

  useEffect(() => {
    axios.get(`/api/v1/product/${fundname}`)
    .then((res) => setfund(res.data))
    .catch((err) => console.log(err))
    console.log(fund)

  }, [])

  return fund ? (
    <Container>
      <FundLink>
        <Link to="/mutual-funds">
          <ArrowBackIosIcon />
          Back to Mutual Funds
        </Link>
      </FundLink>
      <h1 style={{ marginTop: "25px" }}>{fund.name}</h1>
      <AboutCompany>
        <Heading>Details</Heading>
        <Statement>{fund.about}</Statement>
        <Objective>
          <h2>Investment Objective</h2>
          <div>{fund.specifications.objective}</div>
        </Objective>
        <Tax>
          <h2>Tax Implications</h2>
          <div>{fund.specifications.taxImplication}</div>
        </Tax>
      </AboutCompany>
      <Stats>
        <Heading>Fund Details</Heading>
        <StatsWrapper>
          <Col>
            <Risk>
              <div style={{ fontWeight: "bold" }}>Risk</div>
              <div>{fund.specifications.risk}</div>
            </Risk>
            <Nav>
              <div style={{ fontWeight: "bold" }}>NAV</div>
              <div>{fund.specifications.NAV}</div>
            </Nav>
          </Col>
          <Col>
            <SIP>
              <div style={{ fontWeight: "bold" }}>Min SIP Amount</div>
              <div>{fund.specifications.minSIP}</div>
            </SIP>
            <FundStarted>
              <div style={{ fontWeight: "bold" }}>Fund Started</div>
              <div>{fund.specifications.fundStarted}</div>
            </FundStarted>
          </Col>
          <Col>
            <ExpenseRatio>
              <div style={{ fontWeight: "bold" }}>Expense Ratio</div>
              <div>{fund.specifications.expRatio}</div>
            </ExpenseRatio>
            <FundSize>
              <div style={{ fontWeight: "bold" }}>Fund Size</div>
              <div>{fund.specifications.fundSize}</div>
            </FundSize>
          </Col>
        </StatsWrapper>
      </Stats>
    </Container>
  ): <Container></Container>;
}

export default FundDescription;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 70px;
  margin-top: 50px;
  margin-right: 12%;
`;

const FundLink = styled.div`
  cursor: pointer;
  font-weight: 800;
  text-align: start;

  a {
    color: black;
    display: flex;
  }
  a:hover {
    color: #00d09c;
    text-decoration: underline;
  }

  .MuiSvgIcon-root {
    width: 13px;
  }
`;

const AboutCompany = styled.div`
  text-align: left;
  margin-top: 25px;
`;

const Heading = styled.h2``;

const Statement = styled.div`
  font-size: 15px;
  margin-top: 15px;
`;

const Stats = styled.div`
  text-align: left;
  margin-top: 45px;
`;
const StatsWrapper = styled.div`
  text-align: start;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Col = styled.div``;

const Objective = styled.div`
  margin-top: 20px;
`;
const Tax = styled.div`
  margin-top: 20px;
`;

const Risk = styled.div``;
const SIP = styled.div``;
const ExpenseRatio = styled.div``;
const Nav = styled.div`
  margin-top: 15px;
`;
const FundStarted = styled.div`
  margin-top: 15px;
`;
const FundSize = styled.div`
  margin-top: 15px;
`;
