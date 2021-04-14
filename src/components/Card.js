import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ category, id, img, cardname, cardprice, cardrate }) {
  return (
    <Container>
      {category === "Stocks" ? (
        <Link to={`/stock/${id}`}>
          <img src={img} alt="stocks"></img>
          <CardName>{cardname}</CardName>
          <CardPrice>{cardprice}</CardPrice>
          <CardRate>{cardrate}</CardRate>
        </Link>
      ) : (
        <Link to={`/mutual-fund/${id}`}>
          <img src={img} alt="funds"></img>
          <CardName>{cardname}</CardName>
          <CardPrice>{cardprice}</CardPrice>
          <CardRate>{cardrate}</CardRate>
        </Link>
      )}
    </Container>
  );
}

export default Card;
const Container = styled.div`
  min-height: 190px;
  min-width: 168px;
  width: 100%;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin-right: 15px;
  box-shadow: 0 1px 5px 0 lightgrey;
  align-items: center;

  img {
    width: 60px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 42px;
  }
`;

const CardName = styled.h3``;

const CardPrice = styled.h3``;

const CardRate = styled.h3`
  color: #00d09c;
`;
