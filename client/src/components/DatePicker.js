import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import "react-datepicker/dist/react-datepicker.css";

const isWeekday = (date) => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};

class DateTimePicker extends React.Component {
  state = {
    startDate: "",
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
        showTimeSelect
        dateFormat="Pp"
        timeIntervals={15}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        placeholderText="Reserve a time"
        filterDate={isWeekday}
      />
    );
  }
}

export default DateTimePicker;
