import React, { useState, useEffect } from 'react';
import getAllUsers from '../../api/getAllUsers/getAllUsers';

import './allUsersList.css';

const AllUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then(users => setUsers(users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  users.sort((a, b) => b.points - a.points);

  return (
    <div>
      <h2 className="list_title">List of record holders:</h2>
      <ul className="user_list">
        {users.map(user => (
          <li key={user.id}>
            <p className="user_item">
              {user.user_name} <span className="item_span">Record:</span> {user.points}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsersList;
