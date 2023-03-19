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
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-5xl">Contact</h1>
      <p className="mt-10 max-w-2xl text-center">
        We&apos;d love to hear from you! Whether you have questions, comments,
        or just want to say hello, we&apos;re here to help. We value your
        feedback and are always eager to connect with our players and fans. You
        can reach out to us at clovertales@contact.com. We do our best to
        respond to all inquiries in a timely manner, but please allow us a few
        days to get back to you. So don&apos;t be shy, drop us a line and let us
        know what you think about our parallel universe adventure game.
        We&apos;re always happy to hear from you!
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
