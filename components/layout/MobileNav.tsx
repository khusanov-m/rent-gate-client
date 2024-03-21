"use client";

import { ArrowRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const MobileNav = ({
  isAuth,
  onLogout,
}: {
  isAuth: boolean;
  onLogout: () => void;
}) => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <HamburgerMenuIcon
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-zinc-700 cursor-pointer"
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full pt-20 px-2 pb-4">
            {!isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/auth/sign-up")}
                    className="flex items-center w-full font-semibold transition-colors text-green-600 px-10 py-3 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white rounded"
                    href="/auth/sign-up"
                  >
                    Get started
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/auth/login")}
                    className="flex items-center w-full font-semibold transition-colors px-10 py-3 rounded hover:bg-gray-300"
                    href="/auth/login"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300" />
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/user/info")}
                    className="flex items-center w-full font-semibold transition-colors px-10 py-3 rounded hover:bg-gray-300"
                    href="/user/info"
                  >
                    Profile
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full font-semibold transition-colors px-10 py-3 rounded hover:bg-rose-600 focus:bg-rose-600 hover:text-white focus:text-white"
                  >
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
