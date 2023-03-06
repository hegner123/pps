async function loginUser (email, password, supabaseClient) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: `${email}`,
    password: `${password}`
  })
  if (error) {
    return { error: error.message }
  }
  console.log(data)
  return data
}

export { loginUser }
