import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { PrivatRoute } from "./components/PrivatRoute";
import PrivatLoginRoute from "./components/PrivatLoginRoute";
import { Cards } from "./pages/Cards";

export default function App() {
  return (
    <div className="justify-center bg-gradient-to-r from-sky-800 to-slate-800 h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivatRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PrivatRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<PrivatLoginRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivatLoginRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
