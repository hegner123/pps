async function getInstrument (instrumentId : number, supabaseClient : any) {
  if (!instrumentId) throw new Error('No instrumentId provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data: Instruments, error } = await supabaseClient
    .from('Instruments')
    .select('id, name, status, active')
    .eq('id', `${instrumentId}`)

  if (error) console.log('error', error)

  return Instruments
}
async function getInstruments (songID : number, supabaseClient : any) {
  if (!songID) throw new Error('No songID provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data: Instruments, error } = await supabaseClient
    .from('Instruments')
    .select('id, name, status')
    .eq('song_id', `${songID}`)

  if (error) console.log('error', error)

  return Instruments
}

async function insertInstruments (instrumentName : string, songID : number, supabaseClient : any) {
  if (!instrumentName) throw new Error('No instrumentName provided')
  if (!songID) throw new Error('No songID provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data, error } = await supabaseClient
    .from('Instruments')
    .insert([
      { name: `${instrumentName}`, status: 'incomplete', song_id: `${songID}` }
    ])
    .select()

  if (error) console.log('error', error)

  return data
}

async function updateInstrument (instrumentId : number, update : string , supabaseClient : any) {
  if (!instrumentId) throw new Error('No instrumentId provided')
  if (!update) throw new Error('No update provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data: Status, error } = await supabaseClient
    .from('Instruments')
    .update({ status: `${update}` })
    .eq('id', `${instrumentId}`)
    .select()

  if (error) console.log('error', error)
  console.log(Status)

  return Status
}

async function deleteInstrument (instrumentId : number, supabaseClient : any) {
  if (!instrumentId) throw new Error('No instrumentId provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const { data, error } = await supabaseClient
    .from('Instruments')
    .delete()
    .eq('id', `${instrumentId}`)

  if (error) console.log('error', error)

  return data
}

export {
  getInstrument,
  getInstruments,
  insertInstruments,
  updateInstrument,
  deleteInstrument
}
