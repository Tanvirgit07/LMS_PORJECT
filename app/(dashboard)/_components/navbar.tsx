import React from "react";
import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "@/Components/navabr-routes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
