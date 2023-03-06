import { utils } from '../utils'

async function getCurrentProject (slug, supabaseClient) {
  if (slug === undefined) {
    console.log('undefined slug')
    return
  }

  const { data: Project, error } = await supabaseClient
    .from('Projects')
    .select('*')
    .eq('slug', `${slug}`)

  if (error) console.log('error', error)

  return Project[0]
}

async function getAllProjects (userId, supabaseClient) {
  const { data: Projects, error } = await supabaseClient
    .from('Projects')
    .select('*')
    .overlaps('user_ids', [userId])

  if (error) console.log('error', error)

  return Projects
}

async function newProject (form, userId, supabaseClient) {
  const formSlug = utils.slugify(form.name)
  if (form === undefined) {
    console.log('undefined form')
    return
  }
  // console.log('user', user)
  const { data, error } = await supabaseClient
    .from('Projects')
    .insert([
      { name: `${form.name}`, slug: `${formSlug}`, user_ids: [`${userId}`] }
    ])
    .select()
  if (error) console.log('error', error)
  console.log('data', data)
  return data
}

export { newProject, getCurrentProject, getAllProjects }
