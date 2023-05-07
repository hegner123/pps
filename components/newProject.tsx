import { useState } from 'react'
import { useProject } from '../hooks/project/useProject'
import { useRouter } from 'next/router'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useAtom } from 'jotai'
import { requireUpdate } from '../state/store'
import PropTypes from 'prop-types'
const NewProject = ({ close }) => {
  const project = useProject({ action: 'new' })
  const [projectName, setProjectName] = useState('')
  const [, setUpdate] = useAtom(requireUpdate)
  const router = useRouter()
  const users = useUser()
  const supabaseClient = useSupabaseClient()

  function submitForm (e) {
    e.preventDefault()
    project
      .newProject({ name: projectName }, users.id, supabaseClient)
      .then((success) => {
        if (success) {
          router.push('/dashboard')
          setUpdate(true)
          close()
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
        className="block col-span-1 text-white cursor-pointer ml-auto"
        onClick={() => close()}
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
        <span
          className="flex items-center justify-center border-slate-500 border-2 text-white text-center p-2 rounded-md col-span-6 hover:text-black hover:bg-slate-50 hover:border-slate-50 mt-6"
          onClick={() => close()}
        >
          Cancel
        </span>
      </form>
    </div>
  )
}

export default NewProject

NewProject.propTypes = {
  close: PropTypes.func
}