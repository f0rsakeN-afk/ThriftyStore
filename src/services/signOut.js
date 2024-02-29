import supabase from "./supabase";
export async function signOutApi() {
  let { error } = await supabase.auth.signOut();
}
