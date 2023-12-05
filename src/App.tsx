import { log } from "console";
import Card, { CardVariant } from "./components/Card/Card";
import UserList from "./components/Userlist/Userlist";
import { IUser } from "./types/types";

function App() {

const users: IUser[] = []

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
