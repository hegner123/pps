import { useState } from 'react'
import useRegister from '../../hooks/useRegister'

const RegisterForm = () => {
  const userRegister = useRegister()

  return (
    <section className="grid grid-cols-12 grid-rows-12 min-h-screen  bg-slate-50">
      <form className="grid my-auto col-start-3 col-span-5 space-y-3 bg-slate-400 rounded p-4 max-h-max">
        <h1 className="col-span-full text-6xl">Register</h1>
        <label className="col-span-full " htmlFor="email">
          Email
        </label>
        <input
          className="border-solid border-b-2 border-black col-span-full bg-transparent my-0"
          type="email"
          name="email"
          value={userRegister.email}
          onChange={(e) => userRegister.setEmail(e.target.value)}
        />
        <label className="col-span-full" htmlFor="password">
          Password
        </label>
        <input
          className="border-solid border-b-2 border-black col-span-full bg-transparent"
          type="password"
          name="password"
          id="password"
          value={userRegister.password}
          onChange={(e) => userRegister.setPassword(e.target.value)}
        />
        <label className="col-span-full" htmlFor="password-confirmation">
          Password Confirmation
        </label>
        <input
          className="border-solid border-b-2 border-black col-span-full bg-transparent"
          type="password"
          name="password-confirmation"
          id="password-confirmation"
          value={userRegister.passwordConfirmation}
          onChange={(e) => userRegister.setPasswordConfirmation(e.target.value)}
        />
        <div className="flex space-x-4">
          <button
            className="bg-black text-white rounded p-2  hover:bg-slate-500 cursor-pointer"
            type="submit"
            onClick={(e) => userRegister.handleSubmit(e)}
          >
            Submit
          </button>
          <a
            className="bg-black text-white rounded p-2  hover:bg-slate-500 cursor-pointer text-center"
            href="../"
          >
            Cancel
          </a>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm
