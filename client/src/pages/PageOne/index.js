import React from "react";
import { Header, Message } from "semantic-ui-react";
import Locations from "../../components/Locations";

export const PageOne = () => {
  return (
    <>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> Page One </Header>
        <p>This is a Protected Route</p>
      </Message>
      <Locations />
    </>
  );
};

export default PageOne;
