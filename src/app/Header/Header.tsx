'use client'
import React, { ReactNode,FC } from "react";
import "./Header.css";

interface HeaderProps{
  children?:ReactNode
}
const Header: FC<HeaderProps>=({children}) => {
  return <header className="header">{children}</header>;
};

export default Header