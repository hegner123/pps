async function updateArrangement (
  arrangedInstruments,
  hasProjectId,
  supabaseClient
) {
  if (!hasProjectId) throw new Error('No hasProjectId provided')
  if (!arrangedInstruments) throw new Error('No arrangedInstruments provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const updateData = { order: createProjectArrangement(arrangedInstruments) }
  const jsonUpdateData = JSON.stringify(updateData)

  function createProjectArrangement (instruments) {
    if (!instruments) throw new Error('No instruments provided')
    console.log('instruments', instruments)
    if (instruments.length <= 1) {
      return instruments[0].text
    }
    console.log(instruments)
    instruments.forEach((instrument) => {
      if (!instrument.text) throw new Error('instruments.text required')
    })
    return instruments.map((instrument, index) => {
      return instrument.text
    })
  }

  const { data: newArrangement, error } = await supabaseClient
    .from('Projects')
    .update({ arrangement_order: `${jsonUpdateData}` })
    .eq('id', `${hasProjectId}`)
    .select('arrangement_order')
  if (error) console.log('error', error)

  return newArrangement
}

export { updateArrangement }
