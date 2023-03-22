import { Suspense } from "react";
import { PostsList } from "./PostsList";
import Loading from "./loading";

export default function News() {
  return (
    <Suspense fallback={<Loading />}>
      <PostsList />
    </Suspense>
  );
}
