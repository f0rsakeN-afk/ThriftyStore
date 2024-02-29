import supabase from "./supabase";
export async function LoginApi({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error("User login failed");
  }
  //console.log(data);
  return { data, error };
}

export async function getCurrentUser() {
  try {
   /*  const response = await supabase.auth.getSession();
    const sessionData = response.data;

    if (!sessionData.session) return null; */

    const userResponse = await supabase.auth.getUser();
    const userData = userResponse.data;

    if (!userData) return null;

    return userData.user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
