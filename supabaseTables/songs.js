import utils from '../utils'

async function newSong (form, user, supabaseClient) {
  const formSlug = utils.slugify(form.name)
  if (form === undefined) {
    console.log('undefined form')
    return
  }
  // console.log('user', user)
  const { data, error } = await supabaseClient
    .from('Songs')
    .insert([
      {
        name: `${form.name}`,
        slug: `${formSlug}`,
        user_ids: [`${user.id}`]
      }
    ])
    .select()
  if (error) console.log('error', error)

  return data
}

async function getSong (id, supabaseClient) {
  const { data: Song, error } = await supabaseClient
    .from('Songs')
    .select('*')
    .eq('id', `${id}`)

  if (error) console.log('error', error)

  return Song[0]
}

async function getAllSongs (projectId, supabaseClient) {
  const { data: Songs, error } = await supabaseClient
    .from('Songs')
    .select('*')
    .eq('project_id', `${projectId}`)

  if (error) console.log('error', error)

  return Songs
}

export { newSong, getSong, getAllSongs }
