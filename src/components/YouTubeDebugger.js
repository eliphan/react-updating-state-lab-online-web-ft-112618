// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebuggerr extends React.Component {
 
 constructor() {
   super()
   this.state = {
     timeClicked: 0
   }
 }
 
  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      };
    });
  }
  
  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        resolution: '720p'
      };
    });
  }
 
  render() {
    return (
      <button onClick={this.handleBitrate}>Bitrate</button>
      <button onClick={this.handleResolution}>Bitrate</button>
    );
  }
}