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
        <p>Welcome {user ? user.email : ""}</p>
        <p>View your current reservations below</p>
      </Message>
    </Container>
  );
};

export default UserDashboard;
