import React, { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function SkeletonWrapper({
  children,
  isLoading,
  fullWidth = true,
}: { children: ReactNode, isLoading: boolean, fullWidth?: boolean }) {
  if (!isLoading) return children;

  return (
    <div className="relative">
      <Skeleton className={cn(fullWidth ? "w-full" : "")}>
        <div className="opacity-0">{children}</div>
      </Skeleton>
    </div>
  );
}

export default SkeletonWrapper;
