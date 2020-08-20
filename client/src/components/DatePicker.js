import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateTimePicker extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        selected={this.state.date}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="Pp"
      />
    );
  }
}

export default DateTimePicker;
