import React, { Component } from 'react';

class WorldClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const timeOptions = {
      timeZone: this.props.timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    return (
      <div className="world-clock">
        <h2>{this.props.location}</h2>
        <p>{this.state.time.toLocaleTimeString('en-US', timeOptions)}</p>
      </div>
    );
  }
}

export default WorldClock;
