import React from "react";
import { Header, Message, Container } from "semantic-ui-react";
import Locations from "../../components/Locations";
import MapLg from "../../components/MapLg";

export const PageOne = () => {
  return (
    <Container>
      <Message className="message-container" size="huge" secondary="true" style={{margin:"5px"}}>
        <Header size="huge"> MealPlan </Header>
        <p>Select a location and reserve a time</p>
      </Message>
      <MapLg />
      <Locations />
      </Container>
      
  );
};

export default PageOne;
