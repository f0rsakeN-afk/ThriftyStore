import supabase from "./supabase";

export async function LoginApi() {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return data;
}

