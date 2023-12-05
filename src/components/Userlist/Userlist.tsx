import React, {FC} from 'react'
import { IUser } from '../../types/types';
import UserItem from '../UserItem/UserItem';

interface UserListProps {
  users: IUser[]
}
 
const UserList: FC<UserListProps> = ({users}) => {

users[0].address.city

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>
          <UserItem user={user} />
        </div>
      )}
    </div>
  );
}
 
export default UserList;