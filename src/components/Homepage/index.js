import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.email}!</h1>
        <p>You are logged in with React & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items && (
          <ul>
            {users.items.map(item => (
              <li key={item.id}>
                {`${item.firstName} ${item.lastName}`}
              </li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

export default HomePage
