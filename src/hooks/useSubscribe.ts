import { ChangeEventHandler, FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

export const useSubscribe = () => {
  const [isSent, setIsSent] = useState(false);

  const subscribe = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleSubscribe: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setIsSent(true);
    const subscribePromise = subscribe();
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

  return { isSent, handleSubscribe };
};

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return { value, handleChange };
};
