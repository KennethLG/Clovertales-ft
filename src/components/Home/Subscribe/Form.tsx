"use client";

import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { config } from "@/config";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Form = {
  email: string;
  policies: boolean;
};

export default function Form() {
  const {
    formState: { isSubmitSuccessful },
    handleSubmit,
    register,
  } = useForm<Form>();

  const subscribe = async (email: string) => {
    await fetch(`${config.aws.api}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
  };

  const handleSubscribe: SubmitHandler<Form> = async ({ email }: Form) => {
    const subscribePromise = subscribe(email);
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

  return (
    <>
      {isSubmitSuccessful ? (
        <div>
          <p className="text-center text-fuchsia-500">Prepare to be spooked!</p>
          <Image
            src={`${config.aws.cdn}/home/player-running.gif`}
            alt="player running"
            className="w-16 m-auto"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <form className="p-4 relative" onSubmit={handleSubmit(handleSubscribe)}>
          <label className="flex flex-row justify-evenly" htmlFor="agree">
            <input type="checkbox" required {...register("policies")} />
            <p className="text-center text-sm">
              I have read and agree to the{" "}
              <Link
                className="text-fuchsia-200 hover:text-fuchsia-400"
                href="/legal"
              >
                Terms & Conditions.
              </Link>
            </p>
          </label>
          <div className="overflow-hidden rounded-lg flex items-center border border-transparent transition duration-150 ease-in-out focus-within:border-fuchsia-900 focus-within:ring-1 focus-within:ring-fuchsia-900">
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 text-white bg-[#1d1d1d] focus:outline-none focus:border-transparent"
              {...register("email")}
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-fuchsia-900 hover:bg-fuchsia-800 transition duration-150 ease-in-out focus:outline-none focus:border-transparent"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
      <Toaster />
    </>
  );
}
