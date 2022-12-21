import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonLoader() {
  return (
    <SkeletonTheme baseColor="#c8b5a6" highlightColor="#f6f6f48d">
      <p>
        <Skeleton count={3} />
      </p>
    </SkeletonTheme>
  );
}
