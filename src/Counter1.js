import { Component } from "react";



class Counter extends Component{

  constructor(props){

    super(props);

    this.state={

      val:0,

      val1:1,

      id:1001,

      name:'suman kumar'

    }

  this.Counterchange=this.Counterchange.bind(this);

  }

  render(){

    return(

      <>

        <div >

        <p>count is {this.state.val}</p>

        <button type="button"onClick={this.Counterchange}>increment</button>

        </div>

        <div>

        <p>count is {this.state.val1}</p>

        <button type="button"onClick={this.decre}>decrement</button>

        </div>

        <div >

        <p>Id is {this.state.id}</p>

        <p>name is {this.state.name}</p>

        <button type="button"onClick={this.datachange}>Change above data</button>

        </div>

      </>

    )

  }

  decre=()=>{

    this.setState({

      val1:this.state.val1-1

    })

  }

  datachange=()=>{

    this.setState({

      id:7001,

      name:'Shakti kumar'

    })

  }

  Counterchange=function(){

    this.setState({

      val:this.state.val+1

    })

  }

}

export default Counter


