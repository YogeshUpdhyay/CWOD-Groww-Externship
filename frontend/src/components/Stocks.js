import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "../axios";
import { useState, useEffect} from "react";

function Stocks() {
  const [stocks, setstocks] = useState(null);

  useEffect(() => {
    axios.get("/api/v1/product?category=Stocks")
    .then((res) => setstocks(res.data))
    .catch((err) => console.log(err))
    console.log(stocks)

  }, [])

  return (
    <Container>
      {stocks && stocks.map(
        ({ category, id, img, name, price, rate }) => (
          <Card
            key={id}
            category={category}
            id={id}
            img={img}
            cardname={name}
            cardprice={price}
            cardrate={rate}
          />
        )
      )}
    </Container>
  );
}

export default Stocks;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-right: 12%;
  display: flex;
`;
