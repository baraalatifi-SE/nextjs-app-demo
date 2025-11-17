import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function page({ params }) {
  const { postId } = await params;

  const loadingJsx = <div>wait ...</div>;
  return (
    <div>
      {" "}
      <h1>page details</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
