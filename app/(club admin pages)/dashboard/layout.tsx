import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex-grow py-20">{children}</div>;
};

export default DashboardLayout;
