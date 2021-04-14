import "./App.css";
import Chatbots from "./components/Chatbot/Chatbot";
import Header from "./components/Header";
import RoutesHeader from "./components/RoutesHeader";
import Footer from "./components/Footer";
import styled from "styled-components";
import Stocks from "./components/Stocks";
import Funds from "./components/Funds";
import StockDescription from "./components/StockDescription";
import FundDescription from "./components/FundDescription";
import Order from "./components/Order/Order";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import SorderDescription from "./components/Order/SorderDescription";
import ForderDescription from "./components/Order/ForderDescription";

function App() {
  const [showBot, toggleBot] = useState(false);

  window.onbeforeunload = function (e) {
    localStorage.removeItem("chat_messages");
  };

  return (
    <div className="App">
      {showBot && <Chatbots />}
      {window.location.href.split("/")[3] === "admin" ? null : (
        <Button onClick={() => toggleBot((prev) => !prev)}>Bot</Button>
      )}

      <Router>
        {window.location.href.split("/")[3] === "admin" ? null : <Header />}
        {/* <Header /> */}

        <Route path="/gold">
          <RoutesHeader category="gold" />
        </Route>
        <Route path="/us-stocks">
          <RoutesHeader category="us-stocks" />
        </Route>
        <Route path="/fixed-deposits">
          <RoutesHeader category="fixed-deposits" />
        </Route>
        <Route path="/mutual-funds">
          <RoutesHeader category="mutual-funds" />
          <Funds />
        </Route>
        <Route path="/stocks">
          <RoutesHeader category="stocks" />
          <Stocks />
        </Route>
        <Route path="/stock/:stockname" component={StockDescription} />
        <Route path="/mutual-fund/:fundname" component={FundDescription} />
        <Route path="/order/stock/:id" component={SorderDescription} />
        <Route path="/order/fund/:id" component={ForderDescription} />
        <Route path="/orders/:category" component={Order} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={Dashboard} />

        {window.location.href.split("/")[3] === "admin" ? null : <Footer />}
      </Router>
    </div>
  );
}

export default App;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #1f3646;
  border: none;
  position: fixed;
  bottom: 15px;
  z-index: 9999;
  right: 40px;
  outline: none;
  cursor: pointer;
  color: white;
`;
