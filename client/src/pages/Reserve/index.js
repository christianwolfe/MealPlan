import React from "react";
import { Header, Message, Container } from "semantic-ui-react";
import Locations from "../../components/Locations";
import Maps from "../../components/Maps";

export const Reserve = () => {
  return (
    <Container>
      <Message
        className="message-container"
        size="huge"
        secondary="true"
        style={{ margin: "10px" }}
      >
        <Header size="huge"> MealPlan </Header>
        <p>Select a location and reserve a time</p>
        <p></p>
      </Message>
      <Maps />
      <Locations />
    </Container>
  );
};

export default Reserve;
