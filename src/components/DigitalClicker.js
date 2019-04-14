// Code DigitalClicker Component Here
<<<<<<< HEAD
import React from 'react';

export default class DigitalClicker extends React.Component {
 
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }
 
  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
=======
export default class DigitalClicker extends React.Component {
 
 constructor() {
   super()
   this.state = {
     timeClicked = 0
   }
 }
 
  handleClick = () => {
    this.setState({
      timeClicked: this.props.timeClicked + 1
    }, () => console.log(this.state.timeClicked)
    )
>>>>>>> 8810d97b29014d98e1db57827957cdf0ad5491bd
  }
 
  render() {
    return (
<<<<<<< HEAD
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}  
=======
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
>>>>>>> 8810d97b29014d98e1db57827957cdf0ad5491bd
