import React, { Suspense } from "react";
import { getGroupbuyForm } from "@/utils/firebase/firebase";
import NotFound from "./not-found";
import GroupBuyForm from "./groupbuyform";
import Loading from "./loading";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { slug: string } }) {
  const groupSlug = await getGroupbuyForm(params.slug);

  if (groupSlug === undefined) return <NotFound />;
  if (!groupSlug.answer) return <NotFound />;
  return (
    <Suspense fallback={<Loading />}>
      <GroupBuyForm groupSlug={groupSlug} />
    </Suspense>
  );
}
