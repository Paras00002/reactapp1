import { Component } from "react";



export default class EmployeeBook extends Component{

  constructor(props){

    super(props);

  }

  render(){

    return(

      this.props.book.map(a=>(

        <p>

          {a.isbn}

          {a.name}

          {a.cost}

          </p>

      ))

    )

      }
}