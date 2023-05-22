import { SyntheticEvent, useState } from 'react'
import { useProject } from '../hooks/project/useProject'
import { useRouter } from 'next/router'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useAtom } from 'jotai'
import { requireUpdate } from '../state/store'

const NewProject = ({ close }: any) => {
  const project = useProject()
  const [projectName, setProjectName] = useState('')
  const [, setUpdate] = useAtom(requireUpdate)
  const router = useRouter()
  const users = useUser()
  const supabaseClient = useSupabaseClient()

  function submitForm (e : SyntheticEvent) {
    e.preventDefault()
    project
      .newProject({ name: projectName } , users?.id, supabaseClient)
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
    <div className="justify-between p-5 bg-slate-700 site_grid site-width new-project-container">
      <h1 className="col-span-11 text-white">New Project</h1>
      <span
        className="block col-span-1 ml-auto text-white cursor-pointer"
        onClick={() => close()}
      >
        X
      </span>
      <form className="grid bg-slate-700 new-project-form col-span-full">
        <label className="block col-span-12 text-white" htmlFor="Name">
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
          className="col-span-6 p-2 mt-6 text-center text-white rounded-md bg-slate-500 hover:text-black hover:bg-slate-50"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Create
        </button>
        <span
          className="flex items-center justify-center col-span-6 p-2 mt-6 text-center text-white border-2 rounded-md border-slate-500 hover:text-black hover:bg-slate-50 hover:border-slate-50"
          onClick={() => close()}
        >
          Cancel
        </span>
      </form>
    </div>
  )
}

export default NewProject


