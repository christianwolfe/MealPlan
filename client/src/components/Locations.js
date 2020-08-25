import React, { Component } from "react";
import * as Banks from "../data/orlando-food-banks.json";
import { Accordion, Icon, Container, Message } from "semantic-ui-react";
import Modal from "./Modal";

export default class AccordionStyled extends Component {
  state = { activeIndex: 0, results: Banks.default.features, message: false };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state; //if active index is equal to index, i want to return -1,
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  msgStatus = (status) => {
    this.setState({ message: status });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <>
        {this.state.message ? (
          <Message
            success
            header="Your reservation has been successfully added."
            content="View your reservation in the user profile."
            style={{ textAlignVertical: "center", textAlign: "center" }}
          />
        ) : (
          ""
        )}
        {this.state.results.map((data, i) => {
          return (
            <Container>
              <Accordion styled fluid>
                <Accordion.Title
                  active={activeIndex === i}
                  index={i}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  {data.properties.NAME}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i}>
                  <p>
                    {" "}
                    <Icon name="map pin" />
                    {data.properties.ADDRESS}
                  </p>
                  <p>
                    {" "}
                    <Icon name="phone" /> {data.properties.PHONE}
                  </p>
                  <p>
                    {" "}
                    <Icon name="clock outline" /> {data.properties.HOURS}
                  </p>
                  <Icon name="globe" />
                  <a
                    href={data.properties.WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.properties.WEBSITE}
                  </a>
                  <hr />
                  <p>{data.properties.DESCRIPTION}</p>
                  <Modal
                    title={data.properties.NAME}
                    message={this.msgStatus}
                  />
                </Accordion.Content>
              </Accordion>
            </Container>
          );
        })}
      </>
    );
  }
}
