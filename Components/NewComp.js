import React, { Component } from 'react'
import nobell from "./nobell.png"
import bell from "./bell.png"
class NewComp extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message:"subscribe to my channel",
        sub:"subscribe",
        ImageURL: nobell,
        
      };
    }


    styles={
        fontstyle:"bold",
        color:"red",
        };


        
        Buttonchange=()=>{
          this.setState({message:"click a bell icon and never miss the messages",
            sub:"subscribed"
          });
        }
  imageChange=()=>{
    this.setState({
      ImageURL: bell,
    message:"thankyou so much for subscribe my channel"});
  }
        
  render() {
    return (<div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button className='button' onClick={this.Buttonchange}>{this.state.sub}</button>
        <p>
          <img 
          style={{width:"30px", height:"30px"}}
          src={this.state.ImageURL} 
          onClick={this.imageChange}alt=""></img>
          </p></div>
    );
  }
}

export default NewComp