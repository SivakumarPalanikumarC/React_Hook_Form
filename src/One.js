import React, { Component } from "react";

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {name:"Siva" };
  }
  myclick=()=>{
    this.setState({name : 
      'How is it'}) 
  
  };

  render() {
    const { name } = this.state;
    const { Channel } = this.props;

    return (
      <div>
        <p >
          I am from Karur {name}-{Channel}
        </p>
        <button onClick={this.myclick}>Click Here</button>
      </div>
    );
  }
}
export default One;