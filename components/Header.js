import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white py-4 flex justify-between items-center px-4">
      <h2 className="text-4xl font-semibold text-center text-black">
        BlendBorg
      </h2>
      <Link href="/OwnerPage">
        <span className="text-xl font-semibold text-black cursor-pointer">
          Owner
        </span>
      </Link>
    </div>
  );
};

export default Header;
