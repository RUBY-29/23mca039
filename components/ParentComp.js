import React,{Component} from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComp extends Component{

    constructor(props){
        super(props);

        this.state ={
            name:"Ruby"
        };
    }

    componentDidMount(){
        setInterval(() => {

            this.setState({name:" Ruby"});
        },3000);
    }
    render(){
        console.log("Parent component render");
        return <div>
               I'm a parent Component
               <RegComp name={this.state.name} />
               <PureComp name={this.state.name}/>
            </div>
        
    }
}
export default ParentComp;