"use client";

import useGiftbox from "@/lib/hooks/useGiftbox";

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

import { CircleUserRound, Menu, Search, GiftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useDynamicContext();

  const giftbox = useGiftbox();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="https://www.btcgiftshop.xyz/">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-1 ${pathname === "/" && "text-red-1"
            }`}
        >
          Home
        </Link>
        {user && <>
          <Link
            href={user ? "/wishlist" : "/sign-in"}
            className={`hover:text-red-1 ${pathname === "/wishlist" && "text-red-1"
              }`}
          >
            Wishlist
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            className={`hover:text-red-1 ${pathname === "/orders" && "text-red-1"
              }`}
          >
            Orders
          </Link>
        </>}
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/giftbox"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <GiftIcon />
          <p className="text-base-bold">Giftbox ({giftbox.giftboxItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
            {user && <>
              <Link
                href={user ? "/wishlist" : "/sign-in"}
                className="hover:text-red-1"
              >
                Wishlist
              </Link>
              <Link
                href={user ? "/orders" : "/sign-in"}
                className="hover:text-red-1"
              >
                Orders
              </Link>
              <Link
                href="/giftbox"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              >
                <GiftIcon />
                <p className="text-base-bold">Giftbox ({giftbox.giftboxItems.length})</p>
              </Link>
            </>}
          </div>
        )}

        {user ? (
          <DynamicWidget />
        ) : (
          <DynamicWidget />
        )}

      </div>
    </div>
  );
};

export default Navbar;
