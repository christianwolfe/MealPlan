import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleSuccess = () => (
  <Container textAlign="center">
    <Message
      success
      header="Your user reservation was successful"
      content="You may view your reservation on the user dashboard"
    />
  </Container>
);

export default MessageExampleSuccess;
