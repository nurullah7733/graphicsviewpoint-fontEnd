import React, { Fragment } from "react";
import Footer from "./Footer/footer";
import Header from "./Header/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
