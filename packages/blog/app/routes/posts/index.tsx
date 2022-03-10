import { PostCard } from "~/components/PostCard";
import { Outlet } from "remix";

export default function PostRoute() {
  return (
    <PostCard>
      test
      <Outlet />
    </PostCard>
  );
}
