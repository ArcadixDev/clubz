import { ReactNode } from "react";
import Footer from "../primitives/Footer";
import Navigation from "../primitives/Navigation";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-full min-h-screen w-full flex-col">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default BaseLayout;
