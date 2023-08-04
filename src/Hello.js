function Hello() {
  return (
    <div >
      <h1>User Information</h1>
      <table border={5} className='table table-stripped bg-light text-dark table-bordered' >
        <thead>
          <tr>
            <th rowSpan={2}>Id</th>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Salary</th>
            <th colSpan={4}>Address</th>
          </tr>

          <tr>
            <th>city</th>
            <th>state</th>
            <th>pin</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.salary}</td>
            <td>{user.address.city}</td>
            <td>{user.address.state}</td>
            <td>{user.address.pin}</td>
            <td>{user.address.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const user = {
  id: 1001,
  name: "suman Kumar",
  salary: 2000,
  address: {
    city: "new delhi",
    state: "delhi",
    pin: 788787,
    country: "india",
  },
};
export default Hello;
