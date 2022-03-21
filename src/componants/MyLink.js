import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MyLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 text-transparent`;
  }

  return (
    <Link href={href} passHref>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default MyLink;
