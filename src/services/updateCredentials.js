import supabase from "./supabase";
export async function updateCredentials({ email, password }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error("Credentials could not be updated");
  }
  return { data, error };
}
