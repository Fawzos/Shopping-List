import React from "react";
import PropTypes from "prop-types";

class CreateNewItem extends React.Component {
  state = {
    value: "",
  };

  addItem = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  isEmpty = () => {
    return this.state.value === "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.isEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}
CreateNewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default CreateNewItem;
