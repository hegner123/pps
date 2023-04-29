async function newSong (songName, projectId, supabaseClient) {
  if (!songName) throw new Error('No form provided')
  if (!projectId) throw new Error('No user provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const formSlug = slugify(songName)
  if (songName === undefined) {
    console.error('undefined form')
    return
  }
  const newSongData = {
    name: `${songName}`,
    slug: `${formSlug}`,
    project_id: `${projectId}`
  }
  console.log('newSong', newSongData)
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
