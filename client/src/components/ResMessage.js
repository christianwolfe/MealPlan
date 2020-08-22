import React from "react";
import { Message, Container } from "semantic-ui-react";

const MessageSuccess = () => (
  <Container textAlign="center">
    <Message
      success
      header="Your user reservation was successful"
      content="You may view your reservation on the user dashboard"
    />
  </Container>
);

export default MessageSuccess;
