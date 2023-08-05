import { Component } from "react";

export default class Reader extends Component {
  render() {
    return(
         <div>
            <div className="border border-primary w-50 mt-5" style={{'marginLeft':'200px'}}>
             <h2>Reader Page</h2>
             <ul className="ml-3 p-5 ">
                  <li>{reader.id}</li>
                  <li>{reader.name}</li>
                  <li>{reader.location}</li>
             </ul>
             <table container="table table-stripped table-border bg-info">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location</th>
                </thead>
                <tbody>{
                
                        readers.map((a)=>{
                             <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.location}</td>
                             </tr>

                        })
                  } 
                </tbody>
             </table>
             </div>
         </div>
    )
  }
}
const reader={
    id:898989,
    name:'amit Kumar',
    location:'vanaras'
}
const readers=[{
    id:898989,
    name:'amit Kumar',
    location:'vanaras'
  },
  {
    id:893439,
    name:'Parth Kumar',
    location:'gonda'
  },
  {
    id:8234539,
    name:'paras Kumar',
    location:'delhi'
  },
  {
    id:238989,
    name:'shiv Kumar',
    location:'Mp'
  },
  {
    id:8348989,
    name:'Puru Kumar',
    location:'vanaras'
  },
  {
    id:789898,
    name:'Mayank Kumar',
    location:'vanaras'
  }
]