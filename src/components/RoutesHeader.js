import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RoutesHeader({ category }) {
  const [stocks, setStocks] = useState(false);
  const [mutualFunds, setMutualFunds] = useState(false);
  const [fixedDeposits, setFixedDeposits] = useState(false);
  const [gold, setGold] = useState(false);
  const [usStocks, setUsStocks] = useState(false);
  const [stockColor, setStockColor] = useState(false);
  const [mutualColor, setMutualColor] = useState(false);
  const [fdColor, setfdColor] = useState(false);
  const [goldColor, setGoldColor] = useState(false);
  const [usColor, setusColor] = useState(false);

  useEffect(() => {
    if (category === "stocks") {
      setStocks(!stocks);
      setStockColor(!stockColor);
      setGold(false);
      setMutualFunds(false);
      setFixedDeposits(false);
      setUsStocks(false);
      setGoldColor(false);
      setMutualColor(false);
      setfdColor(false);
      setusColor(false);
    } else if (category === "gold") {
      setGold(!gold);
      setGoldColor(!goldColor);
      setStocks(false);
      setMutualFunds(false);
      setFixedDeposits(false);
      setUsStocks(false);
      setMutualColor(false);
      setfdColor(false);
      setusColor(false);
      setStockColor(false);
    } else if (category === "mutual-funds") {
      setMutualFunds(!mutualFunds);
      setMutualColor(!mutualColor);
      setStocks(false);
      setGold(false);
      setFixedDeposits(false);
      setUsStocks(false);
      setGoldColor(false);
      setfdColor(false);
      setusColor(false);
      setStockColor(false);
    } else if (category === "fixed-deposits") {
      setFixedDeposits(!fixedDeposits);
      setfdColor(!fdColor);
      setStocks(false);
      setGold(false);
      setMutualFunds(false);
      setUsStocks(false);
      setGoldColor(false);
      setMutualColor(false);
      setusColor(false);
      setStockColor(false);
    } else if (category === "us-stocks") {
      setUsStocks(!usStocks);
      setusColor(!usColor);
      setStocks(false);
      setGold(false);
      setMutualFunds(false);
      setFixedDeposits(false);
      setStockColor(false);
      setGoldColor(false);
      setMutualColor(false);
      setfdColor(false);
    }
  }, [category]);

  return (
    <Container>
      <RoutesWrraper>
        <Stocks>
          <Link to="/stocks">
            {stockColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>
                Stocks
              </span>
            ) : (
              <span>Stocks</span>
            )}
            {/* Stocks */}
            {/* <Line /> */}
            {stocks && <Line />}
          </Link>
        </Stocks>
        <MutualFunds>
          <Link to="/mutual-funds">
            {mutualColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>
                Mutual Funds
              </span>
            ) : (
              <span>Mutual Funds</span>
            )}
            {/* Mutual Funds */}
            {/* <Line /> */}
            {mutualFunds && <Line />}
          </Link>
        </MutualFunds>
        <FixedDeposits>
          <Link to="/fixed-deposits">
            {fdColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>
                Fixed Deposits
              </span>
            ) : (
              <span>Fixed Deposits</span>
            )}
            {/* Fixed Deposits */}
            {/* <Line /> */}
            {fixedDeposits && <Line />}
          </Link>
        </FixedDeposits>
        <Gold>
          <Link to="/gold">
            {goldColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>Gold</span>
            ) : (
              <span>Gold</span>
            )}
            {/* Gold */}
            {/* <Line /> */}
            {gold && <Line />}
          </Link>
        </Gold>
        <USstocks>
          <Link to="/us-stocks">
            {usColor ? (
              <span style={{ color: "#00d09c", fontWeight: "500" }}>
                US Stocks
              </span>
            ) : (
              <span>US Stocks</span>
            )}
            {/* US Stocks */}
            {/* <Line /> */}
            {usStocks && <Line />}
          </Link>
        </USstocks>
        <FutureOptions>
          {/* Futures & Options
          <Line /> */}
          {gold && <Line />}
        </FutureOptions>
      </RoutesWrraper>
      <HorizontalLine>
        <p></p>
      </HorizontalLine>
    </Container>
  );
}

export default RoutesHeader;

const Container = styled.div`
  height: 60px;
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

const FixedDeposits = styled.div`
  margin-right: 4%;
  color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Gold = styled.div`
  margin-right: 4%;
  color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;

const USstocks = styled.div`
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
