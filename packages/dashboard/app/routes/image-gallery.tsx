import { Outlet } from "remix";

export default function ImageGalleryRoute() {
  return (
    <div>
      Image Gallery Header
      <Outlet />
    </div>
  );
}
