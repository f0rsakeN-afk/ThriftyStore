export async function SignUpApi() {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}
