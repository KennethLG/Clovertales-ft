"use client";

import { Button } from "@/components/global/Button/Button";
import { Input } from "@/components/global/Input/Input";
import { useState } from "react";

const Contact = () => {
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

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-28">
      <h1 className="text-5xl">Contact</h1>
      <p className="mt-10 max-w-2xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <form className="w-2/5 my-5 flex flex-col">
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

        <Button>SEND</Button>
      </form>
    </section>
  );
};

export default Contact;
