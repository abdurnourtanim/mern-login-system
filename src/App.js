import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-200 h-screen ">
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={SignUp} path="/signUp" />
          <Route Component={Profile} path="/profile" />
          <Route Component={Home} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
