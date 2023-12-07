import React, { FC } from 'react'
import { IUser } from '../../types/types';
import { Link } from 'react-router-dom';
import { on } from 'events';

interface UserItemProps {
  user: IUser
}
 
const UserItem: FC<UserItemProps> = ({user}) => {
  return ( 
    <div style={{padding:  15, border: '1px solid grey'}}>
      <Link to={'/users/' + user.id}>
        {user.id}. {user.name} lives in city: {user.address.city} on the {user.address.street} street.
      </Link>
    </div>
   );
}
 
export default UserItem;
