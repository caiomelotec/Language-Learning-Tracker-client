import { Link, useNavigate } from "react-router-dom";
import { useSaveStore } from "../store/saveUserDataStorage";
import axios from "axios";

export const Header = () => {
  const { currentUser, remove } = useSaveStore();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/logout",
        null,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      remove();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex justify-center bg-gradient-to-r from-sky-800 to-slate-800
    border-b border-slate-600"
    >
      <div className="flex justify-between items-center gap-32 py-5">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl text-white">Hey Auth</h1>
        </Link>
        <ul className="flex gap-5 font-semibold text-xl text-white items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {currentUser ? (
            <li onClick={logout}>
              <button className="">Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <Link to="/profile">
            {currentUser && (
              <img
                className="rounded-full h-14 w-14 object-cover"
                src={currentUser.profileImg}
                alt=""
              />
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};
