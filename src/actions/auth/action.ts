import { createClient } from "@/utils/supabase/client";
import { LoginFormInputs } from "./sign-in/page";
import { RegisterFormInputs } from "./sign-up/page";

export async function signUpAction({email, username, password, phone}: RegisterFormInputs){

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            phone,
            username,
          },
        },
      });
      
    return { data, error }
};

export async function checkProfilesAction(username: string){
  const supabase = await createClient()
 
  const {data, error} = await supabase.from("profiles").select("*").eq("username", username)
  if(error){
    if (error.code === "PGRST116") {
      // یعنی رکوردی پیدا نشده
      return false
    }
    console.log("checkProfileError", error);
    return false;
  }

  return data && data.length > 0
};


export async function insertProfilesAction(userId: string, username: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("profiles").insert({
    id: userId,
    username,
    avatar_url: null,
  })

  return { data, error }
}


export async function signInAction({email, password}: LoginFormInputs){
    const supabase = await createClient()

    const { data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
   
    return { data, error}
}

export async function logOutAction(){

  const supabase = await createClient()
  const { error } = await supabase.auth.signOut();
  return error
}