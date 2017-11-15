import React from "react";
import { connect } from "react-redux";
import 'react-dates/initialize';
import { setTextFilter, sortByDateAscend, sortByDateDescend, setStartDate, setEndDate } from "../actions/filters.js";
import { DateRangePicker } from "react-dates";

export class PhotoListFilters extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    const sort = e.target.value;

    if (sort === "Sort By Date Ascending") {
      this.props.sortByDateAscend();
    } else if (sort === "Sort By Date Descending") {
      this.props.sortByDateDescend();
    }
  };
  render() {
    return (
      <div>
        <h1>LUL</h1>
        <input 
          type="text"
          placeholder="Search By title"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortB}
          onChange={this.onSortChange}
        >
          <option>Sort By Date Descending</option>
          <option>Sort By Date Ascending</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapStateToDispatch = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDateAscend: () => dispatch(sortByDateAscend()),
  sortByDateDescend: () => dispatch(sortByDateDescend()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});


export default connect(mapStateToProps, mapStateToDispatch)(PhotoListFilters);