import React from "react";
import { Header, Message } from "semantic-ui-react";
import Locations from "../../components/Locations";

export const PageOne = () => {
  return (
    <>
      <Message className="container message-container" size="huge" secondary="true" style={{margin:"5px"}}>
        <Header size="huge"> MealPlan </Header>
        <p>Select a location and reserve a time</p>
      </Message>
      <Locations />
    </>
  );
};

export default PageOne;
