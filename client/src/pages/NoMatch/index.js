import React from "react";
import { Header, Message, Container } from "semantic-ui-react";

export const NoMatch = () => {
  // Show 404 message if url don't match any routes
  return (
    <Container>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> 404 Page Not Found </Header>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Message>
    </Container>
  );
};
export default NoMatch;
