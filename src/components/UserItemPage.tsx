import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type UserItemPageParams = {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response?.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div>
        <button onClick={() => navigate(-1)} style={{padding: '5px 15px', margin: '10px 0'}}>Back</button>
      </div>
      <div  style={{padding:  15, border: '1px solid grey'}}>
        {user?.id}. {user?.name} lives in city: {user?.address.city} on the {user?.address.street} street.
      </div>
    </>

  );
}
 
export default UserItemPage;