import React, { Suspense } from "react";
import { getGroupbuyForm } from "@/utils/firebase/firebase";
import NotFound from "./not-found";
import GroupBuyForm from "./groupbuyform";
import Loading from "./loading";
import { unstable_noStore as noStore } from "next/cache";

export default async function Page({ params }: { params: { slug: string } }) {
  const groupSlug = await getGroupbuyForm(params.slug);

  if (groupSlug === undefined) return <NotFound />;
  return (
    <Suspense fallback={<Loading />}>
      <GroupBuyForm groupSlug={groupSlug} />
    </Suspense>
  );
}
