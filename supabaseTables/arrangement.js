async function updateArrangement (
  arrangedInstruments,
  hasProjectId,
  supabaseClient
) {
  const updateData = { order: [...arrangedInstruments] }
  const jsonUpdateData = JSON.stringify(updateData)
  const { data: newArrangement, error } = await supabaseClient
    .from('Projects')
    .update({ arrangement_order: `${jsonUpdateData}` })
    .eq('id', `${hasProjectId}`)
  if (error) console.log('error', error)

  return newArrangement
}

export { updateArrangement }
