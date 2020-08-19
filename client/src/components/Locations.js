import React, { Component } from "react";
import * as Banks from "../data/orlando-food-banks.json";
import { Accordion, Icon } from "semantic-ui-react";
import Modal from "./Modal";

export default class AccordionStyled extends Component {
  state = { activeIndex: 0, results: Banks.default.features };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state; //if active index is equal to index, i want to return -1,
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return this.state.results.map((data, i) => {
      return (
        <Accordion styled>
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
            <Icon name="globe" />
            <a href={data.properties.WEBSITE} target="_blank">
              {data.properties.WEBSITE}
            </a>
            <hr />
            <p>{data.properties.DESCRIPTION}</p>
            <Modal />
          </Accordion.Content>
        </Accordion>
      );
    });
  }
}
