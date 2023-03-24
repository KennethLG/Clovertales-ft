import { Button } from "@/components/global/Button/Button";
import Link from "next/link";

export default function FormSent() {
  return (
    <section className="mt-8 text-center">
      <h3 className="text-xl text-purple-400">Thanks for your feedback!</h3>
      <Link href={"/"}>
        <Button>Return to home</Button>
      </Link>
    </section>
  );
}
