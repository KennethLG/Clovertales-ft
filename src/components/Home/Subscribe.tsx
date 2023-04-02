import { config } from "@/config";
import { Image } from "../global/Image/Image";

export default function Subscribe() {
  return (
    <section className="w-full my-16 m-auto flex flex-col md:flex-row overflow-hidden rounded-3xl border-2 border-purple-800 shadow-purple-xl">
      <div className="w-full md:w-2/5 order-1 md:order-none">
        <Image
          src={`${config.aws.cdn}/home/banner-flowers.png`}
          className="w-full"
          width={400}
          height={600}
          alt="Subscribe for more"
        />
      </div>

      <div className="w-full md:w-3/5 p-1 md:p-8 order-2 md:order-none">
        <h2 className="w-full text-3xl text-center">
          GET EXCLUSIVE <strong>DEMO</strong> ACCESS!
        </h2>

        <p className="text-center py-2">
          Unlock the exclusive demo, subscribe for updates, and stay in the loop
          with the latest news!
        </p>

        <div className="p-4 rounded-lg">
          <form className="relative">
            <div className="overflow-hidden rounded-lg flex items-center border border-transparent transition duration-150 ease-in-out focus-within:border-fuchsia-900 focus-within:ring-1 focus-within:ring-fuchsia-900">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-[#1d1d1d] focus:outline-none focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-fuchsia-900 hover:bg-fuchsia-800 transition duration-150 ease-in-out focus:outline-none focus:border-transparent"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
