import { Component } from "react";

class UserForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
          <div>
            <h1>User Page</h1>
            <div>
                Id is {this.props.id}
            </div>
            <div>
                Name is{this.props.name}
            </div>
        </div>
       ) 
   }

}


export default UserForm;