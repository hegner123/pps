import { useState } from "react";
import useLogin from "../../hooks/useLogin";
const LoginForm = () => {
const userLogin = useLogin();
  return (
    <section className="grid grid-cols-12 grid-rows-12 min-h-screen  bg-slate-50">
      <form className="grid my-auto col-start-3 col-span-5 gap-4 bg-slate-400 rounded p-4 max-h-max">
        <h1 className="col-span-full text-6xl">Login</h1>
        <label className="col-span-full" htmlFor="email">
          Email
        </label>
        <input
          className="border-solid border-b-2 border-black col-span-full bg-transparent"
          type="email"
          name="email"
          value={userLogin.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="col-span-full" htmlFor="password">
          Password
        </label>
        <input
          className="border-solid border-b-2 border-black col-span-full bg-transparent"
          type="password"
          name="password"
          id="password"
          value={userLogin.password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <div className="flex space-x-4">
          <input
            className="bg-black text-white rounded p-2 space-x-4 hover:bg-slate-500 cursor-pointer"
            type="submit"
            value="Submit"
            />
          <a
            className="bg-black text-white rounded p-2 space-x-4 hover:bg-slate-500 cursor-pointer text-center"
            href="../">
            Cancel
          </a>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
