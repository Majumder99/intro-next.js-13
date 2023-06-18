import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/us">About Us</Link>
        <Link href="/posts">Posts</Link>
      </div>
    </>
  );
};

export default Navbar;
