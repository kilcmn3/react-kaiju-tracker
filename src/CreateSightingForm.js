import React from 'react';

class CreateSightingForm extends React.Component {
  state = {
    location: '',
    description: '',
    kaijuId: this.props.kaijuId,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let obj = this.state;
    for (const val in obj) {
      if (obj[val] === '') {
        return false;
      }
    }
    this.props.handleSubmit(this.state);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.handleSubmit}>
        <label>Location: </label>
        <input
          type='text'
          name='location'
          placeholder='add your location here..'
          onChange={this.handleChange}
        />
        <br />
        <label>Description: </label>
        <input
          type='text'
          name='description'
          placeholder='add your description here...'
          onChange={this.handleChange}
        />

        <br />

        <input type='submit' value='List Sighting' />
      </form>
    );
  }
}

export default CreateSightingForm;
