import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div
      className="flex justify-center bg-gradient-to-r from-sky-800 to-slate-800
    border-b border-slate-600"
    >
      <div className="flex justify-between items-center gap-32 py-5">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl text-white">Hey Auth</h1>
        </Link>
        <ul className="flex gap-5 font-semibold text-xl text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
