import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./component/pages/UserList";
import CreateUser from "./component/pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
