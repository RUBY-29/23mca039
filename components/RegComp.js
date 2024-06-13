import React,{Component} from "react";

class RegComp extends Component{
    render(){
        console.log("Regular component render");
        return<div>I'm a regular Component{this.props.name}</div>;
    }
}
export default RegComp;