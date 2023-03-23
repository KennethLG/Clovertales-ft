import { Suspense } from "react";
import { PostsList } from "./PostsList";
import Loading from "./loading";

export default async function News() {

  const AsyncPostsList = await PostsList();

  return (
    <Suspense fallback={<Loading />}>
      {AsyncPostsList}
    </Suspense>
  );
}
