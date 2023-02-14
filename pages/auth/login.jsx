import { useState } from "react";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="grid grid-cols-12 grid-rows-12 min-h-screen  bg-slate-200">
      <form className="grid my-auto col-start-5 col-end-7 gap-4 bg-slate-400 rounded p-4 max-h-max">
        <h1 className="col-span-full text-6xl">Login</h1>
        <label className="col-span-full" htmlFor="email">
          Email
        </label>
        <input
          className="border-solid border-b-2 border-black col-span-full bg-transparent"
          type="email"
          name="email"
          value={email}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="bg-black text-white rounded p-2 col-span-4 hover:bg-slate-500 cursor-pointer"
          type="submit"
          value="Submit"
        />
        <a
          className="bg-black text-white rounded p-2 col-span-4 hover:bg-slate-500 cursor-pointer text-center"
          href="../">
          Cancel
        </a>
      </form>
    </section>
  );
};

export default LoginForm;
