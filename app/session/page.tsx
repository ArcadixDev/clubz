"use client";

import React from "react";
import { auth } from "../auth";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  return <div>{JSON.stringify(session, null, 4)}</div>;
};

export default page;
