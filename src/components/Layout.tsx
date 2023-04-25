import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div className="">
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
