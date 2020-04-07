//React
import React from 'react';
// Components
import KaijuCard from './KaijuCard';
import CreateKaijuForm from './CreateKaijuForm';
import TickerContainer from './TickerContainer';
//Fetch Requests
import * as requests from './requests';
// Read the README for how to fetch

class KaijuContainer extends React.Component {
  state = {
    kaijus: [],
    kaiju: null,
    toggle: false,
  };
  componentDidMount() {
    requests.fetchKaijus().then((kaijus) => this.setState({ kaijus }));
  }

  renderCards = () => {
    return this.state.kaijus.map((kaiju, index) => {
      return (
        <KaijuCard key={index} kaiju={kaiju} handleSubmit={this.handleSubmit} />
      );
    });
  };
  handleSubmit = (method, kaiju) => {
    let container = this.state.kaijus;
    let findKaiju = container.filter((target) => target.name === kaiju.name);
    let index = container.findIndex((target) => target.id === kaiju.id);

    if (method === 'delete') {
      this.deleteMethod(container, index, kaiju);
    } else if (method === 'patch') {
      this.patchMethod(container, index, kaiju);
    } else if (method === 'post') {
      if (findKaiju !== -1) {
        this.postMethod(container, kaiju);
      } else {
        return false;
      }
    }
  };
  handleToggle = (event) => {
    let toggle = this.state[event.target.name];
    this.setState({ [event.target.name]: !toggle });
  };
  deleteMethod = (container, index, kaiju) => {
    container.splice(index, 1);

    this.setState(
      {
        kaijus: container,
        kaiju: null,
        toggle: !this.state.toggle,
      },
      () => requests.deleteKaijus(kaiju)
    );
  };
  patchMethod = (container, index, kaiju) => {
    // let index = container.findIndex((target) => target.id === kaiju.id);
    container.splice(index, 1, kaiju);

    this.setState(
      {
        kaijus: container,
        kaiju,
        toggle: !this.state.toggle,
      },
      () => requests.patchKaijus(kaiju, kaiju.id)
    );
  };
  postMethod = (container, kaiju) => {
    container.push(kaiju);
    this.setState(
      {
        kaijus: container,
        kaiju,
        toggle: !this.state.toggle,
      },
      () => requests.postKaijus(kaiju)
    );
  };
  render() {
    return (
      <>
        {this.state.toggle ? (
          <CreateKaijuForm handleSubmit={this.handleSubmit} />
        ) : null}
        {!this.state.toggle ? (
          <button
            type='submit'
            name='toggle'
            onClick={this.handleToggle}
            style={{ color: 'black', backgroundColor: 'white' }}>
            Create Kaiju
          </button>
        ) : null}

        <div id='kaiju-container'>{this.renderCards()}</div>

        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}
      </>
    );
  }
}

export default KaijuContainer;
