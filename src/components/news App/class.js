import React, { Component } from 'react';

class NameHider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true
    };
  }

  toggleName = () => {
    this.setState({
      showName: !this.state.showName
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleName}>Toggle Name</button>
        {this.state.showName && <h1>Sakshi Jaiswal</h1>}
      </div>
    );
  }
}

export default NameHider;
