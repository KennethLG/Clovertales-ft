"use client";

import { config } from "@/config";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "./Form";
import FormSent from "./FormSent";

const Contact = () => {

  const [emailSent, setEmailSent] = useState(false);
  
  const sendEmail = async (form: any) => {
    
    await fetch(`${config.aws.api}/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };
  
  const onSubmit = async (form: any) => {
    const sendEmailPromise = sendEmail(form);
    setEmailSent(true);
    toast.promise(
      sendEmailPromise,
      {
        loading: "Sending Email...",
        success: "Thanks for sending!",
        error: "There was a problem sending your email",
      },
      {
        success: {
          duration: 5000,
        },
        error: {
          duration: 5000,
        },
      }
    );
  };

  return (
    <>
      {
        emailSent ? <FormSent /> : <Form onSubmit={onSubmit} />
      }
      <Toaster />
    </>
  );
};

export default Contact;
