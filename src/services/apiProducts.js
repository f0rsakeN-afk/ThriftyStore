import supabase from "./supabase";

export async function getProductsApi() {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return data;
}


