'use client'
import React, { ReactNode,FC } from "react";
import "./Page.css";
interface PageProps{
  children?:ReactNode
}
const Page :FC<PageProps>=({children}) =>  {
  return <div className="page">{children}</div>;
};

export default Page;