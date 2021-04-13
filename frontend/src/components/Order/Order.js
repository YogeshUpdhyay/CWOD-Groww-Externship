import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "../../axios";

function Order({ match }) {
  let categories = match.params.category;

  const [stocks, setStocks] = useState(false);
  const [mutualFunds, setMutualFunds] = useState(false);
  const [stockColor, setStockColor] = useState(false);
  const [mutualColor, setMutualColor] = useState(false);
  const [multipleOrder, setMultipleOrder] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        accesstoken: localStorage.getItem("accesstoken"),
      },
    };
    console.log(config);
    if (categories === "stocks") {
      setStockColor(true);
      setStocks(true);
      setMutualFunds(false);
      setMutualColor(false);

      axios
        .get("/api/v1/order?category=Stocks", config)
        .then((response) => {
          console.log(response.data);
          setMultipleOrder(response.data);
        })
        .catch((error) => {
          console.log("Error", error.message);
        });
    } else if (categories === "mutual-funds") {
      setStockColor(false);
      setStocks(false);
      setMutualFunds(true);
      setMutualColor(true);

      axios
        .get("/api/v1/order?category=Mutual Fund", config)
        .then((response) => {
          console.log(response.data);
          setMultipleOrder(response.data);
        })
        .catch((error) => {
          console.log("Error", error.message);
        });
    }
  }, [categories]);

  return (
    <Container>
      <RoutesWrraper>
        <Stocks>
          <Link to="/orders/stocks">
            {stockColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>
                Stocks
              </span>
            ) : (
              <span>Stocks</span>
            )}
            {stocks && <Line />}
          </Link>
        </Stocks>
        <MutualFunds>
          <Link to="/orders/mutual-funds">
            {mutualColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>
                Mutual Funds
              </span>
            ) : (
              <span>Mutual Funds</span>
            )}
            {mutualFunds && <Line />}
          </Link>
        </MutualFunds>
        <FutureOptions>
          {/* Futures & Options
    <Line /> */}
          {stocks && <Line />}
        </FutureOptions>
      </RoutesWrraper>
      <HorizontalLine>
        <p></p>
      </HorizontalLine>

      <Orders>
        {multipleOrder.map(({ id, product, orderSpecs, status }) =>
          product.category === "Stocks" ? (
            <Link to={`/order/stock/${id}`}>
              <Row>
                <div>{product.name}</div>
                <div>{orderSpecs.quantity}</div>
                <div>{orderSpecs.orderType}</div>
                <div>{status}</div>
              </Row>
            </Link>
          ) : (
            <Link to={`/order/fund/${id}`}>
              <Row>
                <div>{product.name}</div>
                <div>{orderSpecs.investType}</div>
                <div>{orderSpecs.sipAmount}</div>
                <div>{status}</div>
              </Row>
            </Link>
          )
        )}
      </Orders>
    </Container>
  );
}

export default Order;

const Container = styled.div`
  font-size: 18px;
  align-items: center;
  padding-top: 12px;
`;

const RoutesWrraper = styled.div`
  display: flex;
  padding-left: 12%;
  padding-right: 12%;
`;

const Stocks = styled.div`
  margin-right: 4%;
  margin-left: 0.4%;
  color: #00d09c;
  a {
    text-decoration: none;
    color: black;
  }
`;

const MutualFunds = styled.div`
  margin-right: 4%;
  color: black;
  a {
    text-decoration: none;
    color: black;
  }
`;

const FutureOptions = styled.div``;

const HorizontalLine = styled.div`
  background-color: white;
  height: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    height: 1px;
    display: flex;
    opacity: 0.2;
    width: 100%;
    background-color: #3e3c3c;
    margin-top: 18px;
  }
`;

const Line = styled.div`
  height: 3px;
  display: flex;
  width: 109%;
  background-color: #00d09c;
  margin-top: 8px;
`;

const Orders = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 30px;
  padding-bottom: 30px;
  a {
    color: black;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 5px;
  border: 1px solid lightgray;
  border-right: none;
  border-left: none;
  :hover{
    box-shadow: 0 1px 9px 0 lightgrey;
    cursor:pointer;
  }
}
`;
