import React, { useState, useEffect } from 'react';
import getAllUsers from '../../api/getAllUsers/getAllUsers';

const AllUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then(users => setUsers(users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const sortedUsers = users.sort((a, b) => b.points - a.points);
  console.log('users', sortedUsers);

  return (
    <div>
      <h2>List of record holders:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.user_name} Record: {user.points}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsersList;
