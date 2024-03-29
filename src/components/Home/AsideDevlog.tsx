import Link from "next/link"
import { DevlogList } from "../Devlog/DevlogList"
import { DevlogCard } from "../global/Card/DevlogCard"
import { DevlogCardSmall } from "../global/Card/DevlogCardSmall"

export const AsideDevlog = () => {
  return (
    <aside className="w-full md:sticky md:top-[70px] h-min">
      <Link href={"/devlog"}>
        <h2 className="text-xl text-center font-bold cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100">
          Devlog
        </h2>
      </Link>

      <DevlogList CardComponent={DevlogCardSmall} limit="3" />

      <Link href={"/devlog"}>
        <h2 className="text-xl text-center font-bold cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100">
          Learn more!
        </h2>
      </Link>
    </aside>
  )
}