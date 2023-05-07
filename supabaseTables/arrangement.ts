async function updateArrangement (
  arrangedInstruments : any,
  hasProjectId : number,
  supabaseClient : any
) {
  if (!hasProjectId) throw new Error('No hasProjectId provided')
  if (!arrangedInstruments) throw new Error('No arrangedInstruments provided')
  if (!supabaseClient) throw new Error('No supabaseClient provided')
  const updateData = { order: createProjectArrangement(arrangedInstruments) }
  const jsonUpdateData = JSON.stringify(updateData)

  function createProjectArrangement (instruments : any) {
    if (!instruments) throw new Error('No instruments provided')
    if (instruments.length <= 1) {
      return instruments[0].text
    }
    instruments.forEach((instrument : any) => {
      if (!instrument.text) throw new Error('instruments.text required')
    })
    return instruments.map((instrument : any, index : number) => {
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
