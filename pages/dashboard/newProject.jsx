import { useState } from 'react'
import { useProject } from '../../hooks/useProject'
import { useRouter } from 'next/router'
const NewProject = () => {
  const project = useProject({ action: 'new' })
  const [projectName, setProjectName] = useState('')
  const router = useRouter()
  function submitForm (e) {
    e.preventDefault()
    project
      .newProject({ name: projectName })
      .then((success) => {
        if (success) {
          router.push('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="bg-slate-50 min-h-screen p-5">
      <h1>New Project</h1>
      <form className="bg-slate-700 w-fit p-5 grid grid-cols-12 gap-x-12">
        <label className="text-white block col-span-12" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="col-span-12"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button
          className="bg-slate-500 text-white text-center p-2 rounded-md col-span-6 hover:text-black hover:bg-slate-50 mt-6"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Create
        </button>
        <a
          className="border-slate-500 border-2 text-white text-center p-2 rounded-md col-span-6 hover:text-black hover:bg-slate-50 hover:border-slate-50 mt-6"
          href="/dashboard"
        >
          Cancel
        </a>
      </form>
    </div>
  )
}

export default NewProject
