import type { ReactNode } from "react";
// import Ellipse from "@assets/ellipse.svg?react";
// import "./style.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen bg-[#1D1D1D] p-8 bg text-white overflow-y-auto">
      {/* <div>
        <Ellipse />
      </div> */}
      {children}
    </div>
  );
};

export default Layout;
