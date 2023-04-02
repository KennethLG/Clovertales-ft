import { config } from "@/config";
import { Image } from "../../global/Image/Image";
import TextContent from "./TextContent";

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

      <TextContent />
    </section>
  );
}
