import React from 'react';
import './DashBoard.css';

// Mock data (In a real app, you would fetch this from an API)
const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', contactnumber: '123-456-7890', age:'22',eventname:'Falgship'},
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', contactnumber: '234-567-8901',age:'22',eventname:'Falgship'},
    { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', contactnumber: '345-678-9012',age:'22',eventname:'Falgship' },
    { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com', contactnumber: '456-789-0123',age:'22',eventname:'Falgship' }
  ];

const EventRegistration = () => {
  return (
    <div className="admin-page">
    <h1>User Details</h1>
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Age</th>
          <th>Events</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contactnumber}</td>
            <td>{user.age}</td>
            <td>{user.eventname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default EventRegistration;
