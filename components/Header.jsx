import React from "react";
import Link from "next/link";

const Header = () => (
  <div className="flex items-center justify-between p-2 md:p-4">
    <div className="p-2 md:p-4">
      <Link href="/">
        <a className="block">
          Venus Vavadiya
        </a>
      </Link>
    </div>

    <div className="flex p-1 md:p-2">
      <a
        target="_blank"
        href="/venus-vavadiya-resume.pdf"
        className="block p-1 md:p-2"
      >
        Resume
      </a>

      <a
        target="_blank"
        href="https://github.com/venusvavadiya"
        className="block p-1 md:p-2"
      >
        GitHub
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/venusvavadiya/"
        className="block p-1 md:p-2"
      >
        LinkedIn
      </a>
    </div>
  </div>
);

export default Header;
