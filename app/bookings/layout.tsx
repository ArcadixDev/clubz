import React, { ReactNode } from "react";

// https://github.com/shadcn-ui/ui/tree/main/apps/www/app/examples/tasks/components copy components from here and customize booking details accordingly.
const BookingLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex-grow">{children}</div>;
};

export default BookingLayout;
