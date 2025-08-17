import {FieldValues, Path, UseFormRegister } from "react-hook-form";






  
type FormInputProps<T extends FieldValues> = {
  inputType: React.HTMLInputTypeAttribute; 
  inputPlaceholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string | undefined;
};

const FormInput = <T extends FieldValues>({ inputType, inputPlaceholder, register, name, error }: FormInputProps<T>) => {
  return (
    <div>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className="w-full py-2 px-4 rounded-md m-1 bg-white/10 placeholder-white/50 text-white outline-none focus:ring-2 focus:ring-white"
        {...register(name)}
      />
      {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
    </div>
  );
};

export default FormInput;
