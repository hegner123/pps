async function getDisplayName (userId, supabase) {
  if (!userId) throw new Error('No userId provided')
  if (!supabase) throw new Error('No supabase provided')
  const { data: usersPublic, error } = await supabase
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
