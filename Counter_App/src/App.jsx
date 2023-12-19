import React from "react";

export default class Counter extends React.Component{

  count = 0;

  state = {
    count:0
  }

  Increament = () => {
    this.setState({count:this.state.count+1})
  }
  render(){
    let Decrement = () => {
      if (this.state.count>0){
        this.setState({count: this.state.count - 1})
      }
    }
    let Reset = () => {
      this.setState({count : this.state.count * 0})
    }
    return(
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.Increament}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
      </div>
    )
  }

}