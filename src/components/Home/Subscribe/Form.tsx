"use client";

import { Toaster } from "react-hot-toast";
import Image from "next/image";
import { config } from "@/config";
import { useSubscribe } from "@/hooks/useSubscribe";

export default function Form() {
  const { handleSubscribe, isSent, handleChange, value } = useSubscribe("");

  return (
    <>
      {isSent ? (
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
        <form className="p-4 relative" onSubmit={handleSubscribe}>
          <div className="overflow-hidden rounded-lg flex items-center border border-transparent transition duration-150 ease-in-out focus-within:border-fuchsia-900 focus-within:ring-1 focus-within:ring-fuchsia-900">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-white bg-[#1d1d1d] focus:outline-none focus:border-transparent"
              required
              value={value}
              onChange={handleChange}
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
