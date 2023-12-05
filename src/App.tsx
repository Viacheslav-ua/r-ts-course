import Card, { CardVariant } from "./components/Card/Card";
import UserList from "./components/Userlist/Userlist";
import { IUser } from "./types/types";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState<IUser[]>([])

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
    <div >
      <h1>WORK</h1>
      <Card 
        height='200px' 
        width='300px' 
        variant={CardVariant.primary}
        onClick={(num) => console.log(num)}
      >
        <button>btn</button>
      </Card>

      <UserList users={users} />
    </div>
  );
}

export default App;
