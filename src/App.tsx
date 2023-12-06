import Card, { CardVariant } from "./components/Card/Card";
import UserList from "./components/Userlist/Userlist";
import { ITodo, IUser } from "./types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List/List";
import UserItem from "./components/UserItem/UserItem";
import TodoItem from "./components/TodoItem/TodoItem";
import EventsExample from "./components/EventsExample/EventsExample";

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()

  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response?.data)
    } catch (error) {
      alert(error)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response?.data)
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

      <EventsExample />

      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <hr style={{margin: 15, color: 'blue'}}/>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
}

export default App;
