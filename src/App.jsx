import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import  { Toaster } from "react-hot-toast";
import Earn from "./pages/Earn";
import Friends from "./pages/Friends";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "./pages/Stats";
import Arena from "./pages/Arena";
import Levels from "./pages/Levels";
import { Boost } from "./pages/Boost";
import Profile from "./pages/Profile";
import { SocketProvider } from "./Components/Socket";

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster />
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/level" element={<Levels />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/profile" element={<Profile />} />
   
        </Routes>
        </SocketProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
