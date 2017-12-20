// UserCard.js
import React from 'react';

// ...UserCard component code...
// Custom card component for each user's data
const UserCard = ({ user, onDelete }) => {
  const { first_name, last_name, avatar, id } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div className="UserCard card" style={{ maxWidth: '128px' }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <a href="#" onClick={onDelete} data-id={user.id} />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
    </div>
  );
};

export default UserCard;
