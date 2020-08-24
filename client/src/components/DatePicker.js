import React from "react";
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
  render() {
    return (
      <DatePicker
        selected={this.props.startDate}
        onChange={this.props.handleChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
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
