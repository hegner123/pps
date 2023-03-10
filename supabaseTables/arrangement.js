async function updateArrangement (
  arrangedInstruments,
  hasProjectId,
  supabaseClient
) {
  if (!hasProjectId) return false
  if (!arrangedInstruments) return false
  const updateData = { order: createProjectArrangement(arrangedInstruments) }
  const jsonUpdateData = JSON.stringify(updateData)

  function createProjectArrangement (instruments) {
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
