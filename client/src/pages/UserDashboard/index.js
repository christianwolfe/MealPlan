import React from "react";
import { Header, Message, Container } from "semantic-ui-react";
import { useSelector } from "react-redux";

export const UserDashboard = () => {
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <Container>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> User Dashboard </Header>
        <p>This is a Protected Route</p>
        <p>Welcome {user ? user.email : ""}</p>
      </Message>
    </Container>
  );
};

export default UserDashboard;
