import supabase from "./supabase";

export async function SignUpApi({ email, password }) {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error);
      throw new Error("User signup failed");
    }
  }