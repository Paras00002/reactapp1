import { Component } from "react";

class UserCounter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
    }
    IncrementCount=()=>{
        this.setState(
        {count:this.state.count+1}
        )
    }
    DecrementCount=()=>{
        this.setState(
        {count:this.state.count-1}
        )
    }
    render(){
        return(
            <div>
            <div>
               Count is{this.state.count}
            </div>
            <button type="button" onClick={this.IncrementCount}>IncrementCount</button>
            <button typr="button" onClick={this.DecrementCount}>DecrementCount</button>
            </div>
        )
    }
}
export default  UserCounter;