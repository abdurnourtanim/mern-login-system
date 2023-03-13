import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-200 h-screen ">
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={SignUp} path="/signUp" />
          <Route Component={Profile} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
