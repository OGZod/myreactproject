import { Component } from "react";


class Message extends Component{
  
  render(){
    const{status} = this.props;
    return <h2>Status: {status} </h2>
  }
}
export default Message;