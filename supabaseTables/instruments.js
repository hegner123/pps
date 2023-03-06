async function getInstrument (instrumentId, supabaseClient) {
  const { data: Instruments, error } = await supabaseClient
    .from('Instruments')
    .select('id, name, status')
    .eq('id', `${instrumentId}`)

  if (error) console.log('error', error)

  return Instruments
}
async function getInstruments (songID, supabaseClient) {
  const { data: Instruments, error } = await supabaseClient
    .from('Instruments')
    .select('id, name, status')
    .eq('song_id', `${songID}`)

  if (error) console.log('error', error)

  return Instruments
}

async function updateInstrument (instrumentId, update, supabaseClient) {
  const { data: Status, error } = await supabaseClient
    .from('Instruments')
    .update({ status: `${update}` })
    .eq('id', `${instrumentId}`)
    .select()

  if (error) console.log('error', error)
  console.log(Status)

  return Status
}

export { getInstrument, getInstruments, updateInstrument }
