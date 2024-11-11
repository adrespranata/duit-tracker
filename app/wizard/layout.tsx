import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md lg:max-w-lg">{children}</div>
    </div>
  );
}

export default Layout;
