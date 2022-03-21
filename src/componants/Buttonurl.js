import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Buttonurl = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === "/NicheEdits") {
    className = `${className} GuestButton`;
  }

  return (
    <Link href={href} passHref>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default Buttonurl;
