import { DevlogList } from "@/components/Devlog/DevlogList";
import { DevlogCard } from "@/components/global/Card/DevlogCard";

export default function Devlog() {
  return (
    <section>
      <DevlogList CardComponent={DevlogCard} limit="10" withControls />
    </section>
  )
}