import React, { Component, Fragment } from 'react';
import * as requests from './requests';
import CreateSightingForm from './CreateSightingForm';
export default class Sighting extends Component {
  state = {
    sightings: [],
    toggle: true,
  };
  componentDidMount() {
    requests
      .fetchKaijuSightings(this.props.kaiju.id)
      .then((sightings) => this.setState({ sightings }));
  }
  renderSightings = () => {
    return this.state.sightings.map((sighting, index) => {
      return (
        <li key={index}>
          {sighting.location}: {sighting.description}
        </li>
      );
    });
  };
  handleSubmit = (newSight) => {
    requests.postSightings(newSight);

    let container = this.state.sightings;
    container.push(newSight);
    this.setState({ sightings: container, toggle: !this.state.toggle });
  };
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <Fragment>
        <ul>{this.renderSightings()}</ul>
        <div>
          {this.state.toggle ? (
            <button
              className='kaiju-card-Add-button '
              onClick={this.handleClick}>
              Add Sighting
            </button>
          ) : null}
          {!this.state.toggle ? (
            <CreateSightingForm
              handleSubmit={this.handleSubmit}
              kaijuId={this.props.kaiju.id}
            />
          ) : null}
        </div>
      </Fragment>
    );
  }
}
