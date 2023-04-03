import { config } from "@/config";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

export const useSubscribe = (initialValue: string) => {
  const [isSent, setIsSent] = useState(false);
  const [value, setValue] = useState(initialValue);

  const subscribe = async (email: string) => {
    await fetch(`${config.aws.api}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email
      }),
    });
  };

  const handleSubscribe: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setIsSent(true);
    const subscribePromise = subscribe(value);
    toast.promise(
      subscribePromise,
      {
        loading: "Subscribing...",
        error: "There was an error subscribing",
        success: "Subscribed successfully!",
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


  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return { value, handleChange, isSent, handleSubscribe };
};
