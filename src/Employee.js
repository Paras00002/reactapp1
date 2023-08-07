import Counter from "./Counter1";
import EmployeeBook from "./EmployeeBook";

import Product from "./Product";
import Train from "./Train";

import data from './bookdata';

export default function Employee(props){

  return (

    <div class="bg-dark text-light mt-5 w-50 p-5" style={{'margin-left':'350px'}}>
      <div className="border border-dark bg-light" style={{'height':'300pt','color':'blue'}}>
          <Counter></Counter>
      </div>
      Id is {props.id}<br></br>

      Name is {props.name}<br></br>

      <Product id='1000001' name='Shakti' cost='infinity'></Product>

      <EmployeeBook book={data}></EmployeeBook>

      <Train></Train>

    </div>

  )

}

