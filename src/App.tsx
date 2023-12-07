import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import ExamplesPage from "./components/ExamplesPage";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {
 

  return (
    <BrowserRouter>
      <div style={{fontSize: 20}}>
        <NavLink to={'/examples'} style={{marginRight: 40}}>Examples</NavLink>
        <NavLink to={'/todos'} style={{marginRight: 40}}>Todos</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
      </div>
      <Routes>
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
