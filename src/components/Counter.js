import { Component } from "react";

 
class Counter extends Component {
  
  constructor(){
    super();
    this.state = {counter:0};
   // this.increment = this.increment.bind(this);
  }
  increment = ()=>{

    this.setState({
      counter:this.state.counter + 1,
    });}
  decrement(){
    this.setState({
      counter:this.state.counter - 1,
    });
    }
  render(){
  return (<div><button onClick={this.increment}>Count+ = {this.state.counter}</button> <button onClick={()=>this.decrement()}>Count- = {this.state.counter}</button></div>);
}}

export default Counter;
