import React from "react";
import { auth } from "../auth";

const page = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session, null, 4)}</div>;
};

export default page;
