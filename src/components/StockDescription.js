import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StockDescription({ match }) {
  const [stock, setstock] = useState(null);
  let { stockname } = useParams();

  useEffect(() => {
    console.log(stockname)
    axios.get(`/api/v1/product/${stockname}`)
    .then((res) => setstock(res.data))
    .catch((err) => console.log(err))
    console.log(stock)

  }, [])

  return stock ? (
    <Container>
      <StockLink>
        <Link to="/stocks">
          <ArrowBackIosIcon />
          Back to Stocks
        </Link>
      </StockLink>

      <StockName>{stock.name}</StockName>
      <Performance></Performance>
      <AboutCompany>
        <Heading>About the company</Heading>
        <Statement>{stock.about}</Statement>
        <Wrapper>
          <Organisation>
            <div style={{ fontWeight: "bold" }}>Organisation</div>
            <div style={{ color: "#00d09c" }}>{stock.name}</div>
          </Organisation>
          <Year>
            <div style={{ fontWeight: "bold" }}>Founded Year</div>
            <div>{stock.specifications.yearListed}</div>
          </Year>
          <Director>
            <div style={{ fontWeight: "bold" }}>Managing Director</div>
            <div style={{ color: "#00d09c" }}>{stock.specifications.director}</div>
          </Director>
        </Wrapper>
      </AboutCompany>
      <Stats>
        <Heading>Company Statistics</Heading>
        <StatsWrapper>
          <Col>
            <Market>
              <div style={{ fontWeight: "bold" }}>Market Cap</div>
              <div>{stock.specifications.marketCap}</div>
            </Market>
            <Yield>
              <div style={{ fontWeight: "bold" }}>DIV. Yield</div>
              <div>0.47%</div>
            </Yield>
          </Col>
          <Col>
            <PBRatio>
              <div style={{ fontWeight: "bold" }}>P/B Ratio</div>
              <div>{stock.specifications.pbRatio}</div>
            </PBRatio>
            <Book>
              <div style={{ fontWeight: "bold" }}>Book Value</div>
              <div>{stock.specifications.bookValue}</div>
            </Book>
          </Col>
          <Col>
            <PERatio>
              <div style={{ fontWeight: "bold" }}>P/E Ratio</div>
              <div>{stock.specifications.peRatio}</div>
            </PERatio>
            <TTM>
              <div style={{ fontWeight: "bold" }}>EPS(TTM)</div>
              <div>{stock.specifications.EPS}</div>
            </TTM>
          </Col>
          <Col>
            <Indus>
              <div style={{ fontWeight: "bold" }}>Industry P/E</div>
              <div>{stock.specifications.indPE}</div>
            </Indus>
            <ROE>
              <div style={{ fontWeight: "bold" }}>ROE</div>
              <div>{stock.specifications.ROE}</div>
            </ROE>
          </Col>
        </StatsWrapper>
      </Stats>
    </Container>
  ): <Container></Container>;
}

export default StockDescription;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 70px;
  margin-top: 50px;
  margin-right: 12%;
`;

const StockName = styled.h1`
  margin-top: 25px;
`;
const Performance = styled.div``;
const AboutCompany = styled.div`
  text-align: left;
  margin-top: 25px;
`;

const Heading = styled.h2``;

const Statement = styled.div`
  font-size: 15px;
  margin-top: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  margin-top: 25px;
`;

const Organisation = styled.div``;
const Year = styled.div``;
const Director = styled.div``;
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

const Market = styled.div``;
const PERatio = styled.div``;
const PBRatio = styled.div``;
const Yield = styled.div`
  margin-top: 15px;
`;
const Book = styled.div`
  margin-top: 15px;
`;
const TTM = styled.div`
  margin-top: 15px;
`;
const ROE = styled.div`
  margin-top: 15px;
`;
const Indus = styled.div``;

const StockLink = styled.div`
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
