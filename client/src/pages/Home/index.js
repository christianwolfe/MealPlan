import React from "react";
import { Header, Message, Button, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Maps from "../../components/Maps";
import MapLg from "../../components/MapLg";
import "../../style.css";

export const Home = () => {
  // access to the isAuthenticated property from the auth reducer state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const showLoginBtn = () => {
    if (!isAuthenticated) {
      return (
        <Button color="black" animated secondary>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      );
    }
  };

  const showRegBtn = () => {
    if (!isAuthenticated) {
      return (
        <Button color="black" animated secondary>
          <Button.Content visible>Register</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      );
    }
  };

  return (
    <Container>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge" style={{ marginBottom: "40px" }}>
          Welcome to MealPlan
        </Header>
        <p>
          Discover a new way to gain access to meal and food pantries in your
          community.
        </p>
        <p>View the map for partipating locations.</p>
        <p>
          Log in or register to make a reservation for our
          locations below.
        </p>
        <Link to="/login">{showLoginBtn()}</Link>
        <Link to="/register">{showRegBtn()}</Link>
      </Message>

      <MapLg />
    </Container>
  );
};

export default Home;
