import React from 'react';

const Author = () => {
  var author = {
    name: 'shayam kumar',
    age: 45,
    location: 'new delhi',
    books: ['react for dumies', 'react in action', 'pro react', 'react for begineer'],
  };

  return (
    <div>
      <div className="container">
        <h1>Author Page</h1>
        <table className="table table-stripped bg-light ml-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Books</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{author.name}</td>
              <td>{author.age}</td>
              <td>{author.location}</td>
              <td>
                <ul>
                  {author.books.map((a) => (
                    <li>{a}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Author;
