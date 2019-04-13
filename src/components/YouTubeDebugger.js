// Code YouTubeDebugger Component Here
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
      <button onClick={this.handleButton}>Click me!</button>
    );
  }
}