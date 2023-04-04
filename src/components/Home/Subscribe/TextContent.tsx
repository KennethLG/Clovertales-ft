import Form from "./Form";

export default function TextContent() {
  return (
    <div className="w-full md:w-3/5 pt-1 md:pt-8 order-2 md:order-none">
      <h2 className="w-full text-3xl text-center">
        GET EXCLUSIVE <strong>DEMO</strong> ACCESS SOON!
      </h2>

      <p className="text-center text-sm leading-6 px-1 py-2">
        Sign up now for updates and be the first to know when our exclusive demo
        is available! Stay in the loop with the latest news – don&apos;t miss
        out!
      </p>

      <div className="rounded-lg">
        <Form />
      </div>
    </div>
  );
}
