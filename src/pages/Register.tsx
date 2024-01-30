import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-white">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-300 p-3 rounded-lg text-slate-900 placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full
          "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            id="email"
            className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm-password"
            className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
          />
        </div>
        <button className=" bg-gradient-to-r from-slate-700 to-gray-400 text-white p-3 rounded-lg uppercase hover:bg-gradient-to-r hover:from-gray-400 hover:to-slate-700 duration-200 disabled:opacity-80 w-fit">
          Sign Up
        </button>
        <div>
          <p className="text-white text-lg">Have an account ?</p>
          <Link to={"/login"}>
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
