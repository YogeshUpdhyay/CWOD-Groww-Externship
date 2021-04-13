import React, { useEffect } from "react";

import styled from "styled-components";

const Overview = (props) => {
  let category = window.location.href.split("/");
  console.log(category[3]);

  const Stockoptions = [
    {
      name: "messageparser ",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    {
      name: "config",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      name: "actionprovider",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      name: "widgets",
      handler: props.actionProvider.handleWidgetDocs,
      id: 5,
    },
  ];

  const Fundoptions = [
    {
      name: "messageparser fund",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    {
      name: "config",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      name: "actionprovider",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      name: "widgets",
      handler: props.actionProvider.handleWidgetDocs,
      id: 5,
    },
  ];

  var options = [];

  useEffect(() => {
    options = Stockoptions.map((option) => (
      <Button key={option.id} onClick={option.handler}>
        {option.name}
      </Button>
    ));
  }, category);
  console.log(options);
  //   props.actionProvider.handleKyc

  return (
    <Container>
      {/* {options} */}
      {category[3] === "stocks"
        ? Stockoptions.map((option) => (
            <Button key={option.id} onClick={option.handler}>
              {option.name}
            </Button>
          ))
        : Fundoptions.map((option) => (
            <Button key={option.id} onClick={option.handler}>
              {option.name}
            </Button>
          ))}
      {/* {Stockoptions.map((option) => (
        <Button key={option.id} onClick={option.handler}>
          {option.name}
        </Button>
      ))} */}
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Button = styled.button`
  border-radius: 25px;
  padding: 8px;
  border: 1px solid #173e3f;
  color: #1d1d1d;
  font-size: 0.8rem;
  margin: 4px 4px;
  background: transparent;
  cursor: pointer;
  outline: none;
`;
