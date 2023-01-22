import { config } from "@/config";
import Image from "next/image";

export const About = () => {
  return (
    <section className="text-center w-11/12 md:w-3/5 m-auto my-20">
      <h1 className="text-5xl"> Don&apos;t be afraid! </h1>
      <h1 className="text-5xl"> We are also monsters. </h1>

      <p className="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
};
