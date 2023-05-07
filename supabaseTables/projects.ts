import {NewProject} from '../itemTypes/form'

async function getCurrentProject (slug : string, supabaseClient : any) {
  if (!slug) throw new Error('No slug provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')

  const { data: Project, error } = await supabaseClient
    .from('Projects')
    .select('*')
    .eq('slug', `${slug}`)

  if (error) console.log('error', error)

  return Project[0]
}

async function updateArrangementOrder (
  projectId : number,
  arrangementOrder : any,
  supabaseClient : any
) {
  if (!projectId) throw new Error('No projectId provided')
  if (!arrangementOrder) throw new Error('No arrangementOrder provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')

  const { data: Project, error } = await supabaseClient
    .from('Projects')
    .update({ arrangement_order: arrangementOrder })
    .eq('id', `${projectId}`)

  if (error) console.log('error', error)

  return Project[0]
}

async function getAllProjects (userId : number, supabaseClient : any) {
  if (!userId) throw new Error('No userId provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data: Projects, error } = await supabaseClient
    .from('Projects')
    .select('*')
    .overlaps('user_ids', [userId])

  if (error) console.log('error', error)

  return Projects
}

async function newProject (form : NewProject, userId : number, supabaseClient : any) {
  if (!form) throw new Error('No form provided')
  if (!userId) throw new Error('No userId provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const formSlug = slugify(form.name)

  const { data, error } = await supabaseClient
    .from('Projects')
    .insert([
      {
        name: `${form.name}`,
        slug: `${formSlug}`,
        arrangement_order: '{"order":[]}',
        user_ids: [`${userId}`]
      }
    ])
    .select()
  if (error) console.log('error', error)
  console.log('data', data)
  return data
}

export { newProject, updateArrangementOrder, getCurrentProject, getAllProjects }

function slugify (str : string) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
