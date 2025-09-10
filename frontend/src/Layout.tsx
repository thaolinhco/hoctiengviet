import React from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
