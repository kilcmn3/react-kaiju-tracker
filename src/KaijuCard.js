// React
import React from 'react';
// Components
import EditKaijuForm from './EditKaijuForm';

class KaijuCard extends React.Component {
  // How can we show the edit form conditionally?
  state = {
    editToggle: false,
  };
  handleToggle = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };
  handleClick = () => {
    this.props.handleSubmit('delete', this.props.kaiju);
  };
  render() {
    const { name, power, image, id } = this.props.kaiju;

    return (
      <div className='kaiju-card'>
        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img
          className='kaiju-card-image'
          src={image}
          alt={'Maybe something should go here'}
        />

        {this.state.editToggle ? (
          <EditKaijuForm
            handleSubmit={this.props.handleSubmit}
            handleToggle={this.handleToggle}
            id={id}
            kaiju={this.props.kaiju}
          />
        ) : null}
        <button
          className='kaiju-card-edit-button'
          onClick={this.handleToggle}
          name='editToggle'>
          Edit
        </button>
        {this.state.editToggle ? (
          <button
            className='kaiju-card-delete-button'
            onClick={this.handleClick}>
            Delete Kaiju
          </button>
        ) : null}
      </div>
    );
  }
}

export default KaijuCard;
