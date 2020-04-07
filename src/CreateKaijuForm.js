import React from 'react';

class CreateKaijuForm extends React.Component {
  state = {
    name: '',
    power: '',
    image: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let obj = this.state;
    for (const val in obj) {
      if (obj[val] === '') {
        return false;
      }
    }
    this.props.handleSubmit('post', this.state);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          placeholder='add your name here..'
          onChange={this.handleChange}
        />

        <label>Power: </label>
        <input
          type='text'
          name='power'
          placeholder='add your power here...'
          onChange={this.handleChange}
        />

        <label>Image: </label>
        <input
          type='text'
          name='image'
          placeholder='add your image url here...'
          onChange={this.handleChange}
        />

        <br />

        <input type='submit' value='List Kaiju' />
      </form>
    );
  }
}

export default CreateKaijuForm;
