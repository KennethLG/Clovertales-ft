import Form from "./Form";

export default function TextContent() {
  return (
    <div className="w-full md:w-3/5 pt-1 md:pt-8 order-2 md:order-none">
      <h2 className="w-full text-3xl text-center">
        GET EXCLUSIVE <strong>DEMO</strong> ACCESS!
      </h2>

      <p className="text-center py-2">
        Unlock the exclusive demo, subscribe for updates, and stay in the loop
        with the latest news!
      </p>

      <div className="rounded-lg">
        <Form />
      </div>
    </div>
  );
}
