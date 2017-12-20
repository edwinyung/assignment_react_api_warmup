// components/App.js
import React from 'react';
// Optionally add a reusable Jumbotron element
import JumbotronFluid from './elements/JumbotronFluid';
import UserList from './UserList';
import UserForm from './UserForm';
import serialize from 'form-serialize';

const App = ({ users, isFetching, error, onAddUser, onDeleteUser }) => (
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations"
    />
    <UserList users={users} isFetching={isFetching} onDelete={onDeleteUser} />
    {/* Add new UserForm component & pass submit action */}
    <br />
    <UserForm onSubmit={onAddUser} error={error} />
  </div>
);

export default App;
