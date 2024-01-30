import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterFormSchema } from "../util/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

type RegisterFormInputs = z.infer<typeof RegisterFormSchema>;

export const Register = () => {
  const [errMsg, setErrMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const processForm: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-white">
        Sign Up
      </h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(processForm)}
      >
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-300 p-3 rounded-lg text-slate-900 placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full
          "
            {...register("username")}
          />
          {errors.username?.message && (
            <p className="my-1 text-sm text-rose-500">
              {errors.username.message}
            </p>
          )}
        </div>
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
        <div>
          <input
            type="password"
            placeholder="confirmPassword"
            id="confirmPassword"
            className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-500
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="my-1 text-sm text-rose-500">
              {errors.confirmPassword.message}
            </p>
          )}
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
