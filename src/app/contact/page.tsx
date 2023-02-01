"use client";

import { Button } from "@/components/global/Button/Button";
import { Input } from "@/components/global/Input/Input";
import { config } from "@/config";
import React, { useState } from "react";

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

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`${config.aws.api}/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    console.log(result);
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

      <form className="w-4/5 md:w-2/5 my-5 flex flex-col" onSubmit={onSubmit}>
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
    </section>
  );
};

export default Contact;
