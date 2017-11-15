import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoLink: props.photo ? props.photo.photoLink : "",
      title: props.photo ? props.photo.title : "",
      description: props.photo ? props.photo.description : "",
      createdAt: props.photo ? moment(props.photo.createdAt) : moment(),
      calenderFocused: false,
      error: ""
    };
  }
  onPhotoChange = (e) => {
    const photoLink = e.target.value;
    this.setState(() => ({ photoLink }));
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({ calenderFocused: focused }))
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.photoLink || !this.state.title) {
      this.setState(() => ({ error: "Please provide photo information"}));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        photoLink: this.state.photoLink,
        title: this.state.title,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input 
            type="text"
            autoFocus
            placeholder="Enter Photo Link"
            value={this.state.photoLink}
            onChange={this.onPhotoChange}
          />
          <input 
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false }
          />
          <textarea 
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <div>
            <button>Save Photo</button>
          </div>
        </form>
      </div>
    )
  };
}

export default PhotoForm;