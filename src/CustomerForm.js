import { Component } from "react";

class CustomerForm extends Component{
    constructor(props){
        super(props)
        this.state={
            'id':0,
            'name':'',
            'salary':0
        }
    }
    render(){
        return(
            <div>
                <form>
                    <div className="'form-group">
                      <label>Enter Id</label>
                      <input className="form-control"></input>
                    </div>
                    <div className="'form-group">
                      <label>Enter Name</label>
                      <input className="form-control"></input>
                    </div>
                    <div className="'form-group">
                      <label>Enter Salary</label>
                      <input className="form-control"></input>
                    </div>

                </form>
            </div>
        )
    }
}