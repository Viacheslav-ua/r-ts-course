import axios from 'axios';
import  React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { IUser, ITodo } from '../types/types';
import List from './List/List';
import UserItem from './UserItem/UserItem';
import { useNavigate } from 'react-router-dom';
 
const UsersPage: FC = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()
  
  useEffect(() => {

    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response?.data)
    } catch (error) {
      alert(error)
    }
  }

  return ( 
    <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
  );
}
 
export default UsersPage;