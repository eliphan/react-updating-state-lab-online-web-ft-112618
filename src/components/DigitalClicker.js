// Code DigitalClicker Component Here
export default class DigitalClicker extends React.Component {
 
 constructor() {
   super()
   this.state = {
     timeClicked: 0
   }
 }
 
  handleClick = () => {
    this.setState({
      timeClicked: this.props.timeClicked + 1
    }, () => console.log(this.state.timeClicked)
    )
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}