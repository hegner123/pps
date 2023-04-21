import { useState } from 'react'
import { useProject } from '../hooks/project/useProject'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
const NewProject = ({ closeState }) => {
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
    <div className="bg-slate-700 p-5 site_grid site-width new-project-container justify-between">
      <h1 className="col-span-11 text-white">New Project</h1>
      <span
        className="block col-span-1 text-white"
        onClick={() => closeState()}
      >
        X
      </span>
      <form className="bg-slate-700 grid new-project-form col-span-full">
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
          className="flex items-center justify-center border-slate-500 border-2 text-white text-center p-2 rounded-md col-span-6 hover:text-black hover:bg-slate-50 hover:border-slate-50 mt-6"
          href="/dashboard"
        >
          Cancel
        </a>
      </form>
    </div>
  )
}

export default NewProject

NewProject.propTypes = {
  closeState: PropTypes.func
}
