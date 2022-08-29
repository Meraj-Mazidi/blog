import React from "react";
import TopBar from "./Components/topBar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from "./Components/post/Post";


function App() {
  const [user, setUser] = React.useState(true)
  return (
    <BrowserRouter>
      <TopBar user={user} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
