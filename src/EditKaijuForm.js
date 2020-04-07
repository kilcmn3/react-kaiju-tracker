import React from 'react';

class EditKaijuForm extends React.Component {
  state = {
    id: this.props.kaiju.id,
    name: this.props.kaiju.name,
    power: this.props.kaiju.power,
    image: this.props.kaiju.image,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let obj = this.state;
    for (const val in obj) {
      if (obj[val] === '') {
        return false;
      }
    }
    this.props.handleToggle();
    this.props.handleSubmit('patch', this.state);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, power, image } = this.state;
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={name}
          />
          <br />
          <label>Power: </label>
          <input
            type='text'
            name='power'
            onChange={this.handleChange}
            value={power}
          />
          <br />
          <label>Image URL: </label>
          <input
            type='text'
            name='image'
            onChange={this.handleChange}
            value={image}
          />
          <br />
          <input type='submit' value='Save Changes' />
        </form>
      </>
    );
  }
}

export default EditKaijuForm;
