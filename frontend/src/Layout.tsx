import Header from "./components/Header/Header";
import React from "react";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
    </div>
);

export default Layout;
