async function getDisplayName (userId : number, supabaseClient : any) {
  if (!userId) throw new Error('No userId provided')
  if (!supabaseClient) throw new Error('No supabase provided')
  const { data: usersPublic, error } = await supabaseClient
    .from('users_public')
    .select('display_name')
    .eq('user_id', userId)
  if (error) {
    console.log('error', error)
    return
  }
  return usersPublic[0].display_name
}

export { getDisplayName }
