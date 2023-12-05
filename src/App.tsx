import { log } from "console";
import Card, { CardVariant } from "./components/Card/card";

function App() {
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
    </div>
  );
}

export default App;
