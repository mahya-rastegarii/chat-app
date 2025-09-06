"use client"



import Form from "@/components/form/Form";
import FormButton from "@/components/form/FormButton";
import FormInput  from "@/components/form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { signInAction } from "@/actions/auth/action";
import { useRouter } from "next/navigation";




export type LoginFormInputs = {
  email: string;
  password: string;
}


 const LoginPage = () => {


 const router = useRouter()

  const schema = z.object({
    email: z
    .email("Invalid email address"),
  
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  });

 const { register, handleSubmit, formState : { errors}} = useForm<LoginFormInputs>({
      resolver: zodResolver(schema)
    })

    const onSubmit = async(data: LoginFormInputs) => {
      const { error } = await signInAction(data)
      console.log("sign-in Data is :", data)
      if(error) {
        console.log(error.message)
        return;
      }
      


      // console.log("sign-in Data is :", data)
      router.push("/chat")
    };
  
    
    return ( 
       

      
     <Form submited={handleSubmit(onSubmit)} title="Login">
     
     <FormInput<LoginFormInputs>
      inputType="email"
       inputPlaceholder=" Enter your email"
        name="email"
        register={register}
        error={errors.email?.message}/>

     <FormInput<LoginFormInputs>
      inputType="password"
       inputPlaceholder=" Enter your password"
        name="password"
        register={register}
        error={errors.password?.message}/>


     <FormButton text="Login"/>

      <p className="text-sm text-white/80 text-center">
        You don`t have an account?{" "}
        <Link href="/sign-up">
          <span className="text-white font-bold underline hover:text-gray-200">Register</span>
        </Link>
      </p>
      </Form>



   

 );
}
 
export default LoginPage;