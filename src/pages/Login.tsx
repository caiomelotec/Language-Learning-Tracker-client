import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormSchema } from "../util/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { AxiosError } from "axios";
import { useAuthStore } from "../store/AuthStore";

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export const Login = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const { login } = useAuthStore((state) => state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
  });

  const processForm: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await login(data);
      reset();
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setErrMsg(err.response?.data.message);
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
      }
      console.log(err);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-white">
        Sign In
      </h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(processForm)}
      >
        <div>
          <input
            type="text"
            placeholder="Email Address"
            id="email"
            className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="my-1 text-sm text-rose-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="my-1 text-sm text-rose-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex gap-5">
          <button className=" bg-gradient-to-r from-slate-700 to-gray-400 text-white p-3 rounded-lg uppercase hover:bg-gradient-to-r hover:from-gray-400 hover:to-slate-700 duration-200 disabled:opacity-80 w-fit">
            Sign In
          </button>
          <button className=" bg-gradient-to-r from-sky-800 to-gray-400 text-white p-3 rounded-lg uppercase hover:bg-gradient-to-r hover:from-gray-400 hover:to-sky-800 duration-200 disabled:opacity-80 w-fit">
            Sign In With Google
          </button>
        </div>
        <div>
          <p className="text-white text-lg">Don't have an account ?</p>
          <Link to={"/register"}>
            <span className="text-blue-500">Sign up</span>
          </Link>
        </div>
        {errMsg && (
          <p className="my-1 p-1 text-rose-600  rounded-lg font-semibold">
            {errMsg}
          </p>
        )}
      </form>
    </div>
  );
};
