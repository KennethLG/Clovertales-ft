"use client"

import { Button } from "@/components/global/Button/Button";
import { Input } from "@/components/global/Input/Input";
import { useState } from "react";

interface FormProps {
  onSubmit: (event: React.FormEvent, form: any) => Promise<void>;
}

export default function Form({ onSubmit }: FormProps) {

  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="w-4/5 md:w-2/5 my-5 flex flex-col" onSubmit={(event) => onSubmit(event, form)}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={onChange}
          value={form.email}
        />
        <Input
          label="Message"
          name="message"
          type="textarea"
          placeholder="Enter your message"
          onChange={onChange}
          value={form.message}
        />
        <Button type="submit">SEND</Button>
      </form>
    </>
  );
}