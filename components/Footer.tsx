import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <p>
        <span>&copy; </span>
        {new Date().getFullYear()}
        <span> created by Siddhesh with </span>
        <span className="hover:text-white text-gray-400 font-bold">
          <Link
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            NextJS
          </Link>
        </span>
        <span>{' , '}</span>
        <span className="hover:text-white text-gray-400 font-bold">
          <Link
            href="https://www.typescriptlang.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TypeScript
          </Link>
        </span>
        <span>{' , '}</span>
        <span className="hover:text-white text-gray-400 font-bold">
          <Link
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind
          </Link>
        </span>
        <span>{' & '}</span>
        <span className="hover:text-white text-gray-400 font-bold">
          <Link
            href="https://resend.com/emails"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resend
          </Link>
        </span>
        <span>{'.'}</span>

      </p>
    </div>
  );
};

export default Footer;
