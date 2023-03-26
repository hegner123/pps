async function newSong (form, user, supabaseClient) {
  if (!form) throw new Error('No form provided')
  if (!user) throw new Error('No user provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const formSlug = slugify(form.name)
  if (form === undefined) {
    console.error('undefined form')
    return
  }
  const newSongData = {
    name: `${form.name}`,
    slug: `${formSlug}`,
    user_ids: [`${user.id}`]
  }
  const { data, error } = await supabaseClient
    .from('Songs')
    .insert([newSongData])
    .select()
  if (error) console.error(error)

  return data
}

async function getSong (id, supabaseClient) {
  if (!id) throw new Error('No id provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  console.log('getSong', id)
  const { data: Song, error } = await supabaseClient
    .from('Songs')
    .select('*')
    .eq('id', `${id}`)

  if (error) console.error(error)

  return Song
}

async function getAllSongs (projectId, supabaseClient, debug, setDebug) {
  if (!projectId) throw new Error('No projectId provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data: Songs, error } = await supabaseClient
    .from('Songs')
    .select('*')
    .eq('project_id', `${projectId}`)

  if (error) console.error(error)

  return Songs
}

function slugify (str) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export { newSong, getSong, getAllSongs }
