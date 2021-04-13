import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "../axios";
import { useState, useEffect} from "react";

function Funds() {
  const [funds, setfunds] = useState(null);

  useEffect(() => {
    axios.get("/api/v1/product?category=Mutual Fund")
    .then((res) => setfunds(res.data))
    .catch((err) => console.log(err))
    console.log(funds)
  }, [])

  return (
    <Container>
      {funds && funds.map(({ id, img, name, price, rate }) => (
        <Card
          key={id}
          id={id}
          img={img}
          cardname={name}
          cardprice={price}
          cardrate={rate}
        />
      ))}
    </Container>
  );
}

export default Funds;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-right: 12%;
  display: flex;
`;
