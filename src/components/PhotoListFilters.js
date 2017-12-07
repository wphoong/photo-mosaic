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

    if (sort === "ascend") {
      this.props.sortByDateAscend();
    } else if (sort === "descend") {
      this.props.sortByDateDescend();
    }
  };
  render() {
    return (
      <div className="input-group">
      
        <div className="input-group__item">
          <div className="control">
            <div className="select">
              <select
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
              >
                <option value="descend">Date Descending</option>
                <option value="ascend">Date Ascending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="input-group__item">
          <input 
            type="text"
            placeholder="Search By title"
            value={this.props.filters.text}
            onChange={this.onTextChange}
            className="text-input"
          />
        </div>
 
        
        <div className="input-group__item">
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