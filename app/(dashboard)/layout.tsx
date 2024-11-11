import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen w-full flex-col">
      <Navbar />
      {/* <div className="container mx-auto"> */}
      {children}
      {/* </div> */}
    </div>
  );
}

export default layout;
