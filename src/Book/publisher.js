export default function Publisher() {
  return (
    <div className="border border-dark w-50 ml-5 p-5" style={{'margin':'100px'}}>
      <h1 style={{'marginLeft':'100px'}}>Publisher Page</h1>
      <ul className="ml-5" style={{'marginLeft':'100px'}}>
        <li>Id:{publisher.id}</li>
        <li>Id:{publisher.name}</li>
        <li>Id:{publisher.location}</li>
        <li>Id:{publisher.state}</li>
      </ul>
    </div>
  )
}

const publisher = {
  id: 887654,
  name: "abc publisher",
  location: "merrut",
  state:'up',
  country:'india'
};
