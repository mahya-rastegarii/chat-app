"use client"

import { useForm } from "react-hook-form";
import FormInput from "@/components/form/FormInput";

import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/form/Form";
import FormButton from "@/components/form/FormButton";
import { checkProfilesAction, insertProfilesAction, signUpAction } from "@/actions/auth/action";
import { useRouter } from "next/navigation";

export type RegisterFormInputs = {
  username: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
};


const RegisterPage = () => {
const router = useRouter()

const schema = z.object({
    username: z
      .string()
      .min(4, "Username must be at least 4 characters long"),
  
    email: z
      .email("Invalid email address"),
  
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  
    confirmPassword: z.string(),
  
    phone: z
      .string()
      .regex(/^09\d{9}$/, "Phone number must be 11 digits and start with 09"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirmation do not match",
    path: ["confirmPassword"],
  });
  

    const { register, handleSubmit, formState : {errors}} = useForm<RegisterFormInputs>({
      resolver: zodResolver(schema)
    })


  
const onSubmit = async (data: RegisterFormInputs) => {

  const checkProfile = await checkProfilesAction(data.username)

  if(checkProfile){
    alert("username hast!");
    return;
  }

 else {
  const { data: signUpData, error: signUpError } = await signUpAction(data)

  if (signUpError) {
    console.log("signUpError", signUpError.message)
    return
  }

  const userId = signUpData?.user?.id
  if (!userId) {
    console.log("No user returned from signUp")
    return
  }

  const { data: insertProfileData, error: insertProfileError } =
    await insertProfilesAction(userId, data.username)

  if (insertProfileError) {
    console.log("errorInsertProfile", insertProfileError)
  }

  console.log("insertProfileData", insertProfileData)
  router.push("/chat")
}
}

  


    return (
       
      <Form submited={handleSubmit(onSubmit)} title="Register">


     <FormInput<RegisterFormInputs> inputType="text"
      inputPlaceholder="Enter your username"
       register={register} 
       name="username"
      error={errors.username?.message}/>
      
     <FormInput<RegisterFormInputs> inputType="email"
      inputPlaceholder="Enter your email"
       register={register} 
       name="email"
      error={errors.email?.message}/>
      
     <FormInput<RegisterFormInputs> inputType="number"
      inputPlaceholder="Enter your phone numder"
       register={register} 
       name="phone"
      error={errors.phone?.message}/>
      
     <FormInput<RegisterFormInputs> inputType="password"
      inputPlaceholder="Enter your password"
       register={register} 
       name="password"
      error={errors.password?.message}/>
      
     <FormInput<RegisterFormInputs> inputType="password"
      inputPlaceholder="Enter your password again"
       register={register} 
       name="confirmPassword"
      error={errors.confirmPassword?.message}/>
      

     <FormButton text="Register"/>

      <p className="text-sm text-white/80 text-center">
        You do have an account?{" "}
        <Link href="/sign-in">
          <span className="text-white font-bold underline hover:text-gray-200">Login</span>
        </Link>
      </p>
      </Form>

    );
}

export default RegisterPage;