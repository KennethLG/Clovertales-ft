"use client";

import { Button } from "@/components/global/Button/Button";
import { Input } from "@/components/global/Input/Input";
import { useForm } from "react-hook-form";

type InputForm = {
  email: string,
  message: string
}

interface FormProps {
  onSubmit: (form: any) => Promise<void>;
}

export default function Form({ onSubmit }: FormProps) {

  const { register, handleSubmit, formState: { errors }} = useForm<InputForm>();

  return (
    <>
      <form
        className="w-4/5 md:w-7/12 my-5 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          errors={errors}
        />
        <Input
          label="Message"
          name="message"
          type="textarea"
          placeholder="Enter your message"
          register={register}
          errors={errors}
        />
        <Button type="submit">SEND</Button>
      </form>
    </>
  );
}
