async function newSong (form, user, supabaseClient) {
  const formSlug = slugify(form.name)
  if (form === undefined) {
    console.error('undefined form')
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
  if (error) console.error(error)

  return data
}

async function getSong (id, supabaseClient) {
  console.log('getSong', id)
  const { data: Song, error } = await supabaseClient
    .from('Songs')
    .select('*')
    .eq('id', `${id}`)

  if (error) console.error(error)

  return Song
}

async function getAllSongs (projectId, supabaseClient, debug, setDebug) {
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
