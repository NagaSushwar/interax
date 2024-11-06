"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import {
  FaShoppingBag,
  FaSignOutAlt,
  FaStar,
  FaTimesCircle,
  FaUserAlt,
} from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    {
      id: "account",
      icon: <FaUserAlt size={20} />,
      label: "Manage My Account",
      href: "/account",
    },
    {
      id: "orders",
      icon: <FaShoppingBag size={20} />,
      label: "My Order",
      href: "/orders",
    },
    {
      id: "cancellations",
      icon: <FaTimesCircle size={20} />,
      label: "My Cancellations",
      href: "/cancellations",
    },
    {
      id: "reviews",
      icon: <FaStar size={20} />,
      label: "My Reviews",
      href: "/reviews",
    },
    {
      id: "logout",
      icon: <FaSignOutAlt size={20} />,
      label: "Logout",
      href: "/logout",
    },
  ];

  const handleItemClick = (id, href) => {
    setActiveItem(id);
    setShowMenu(false);
    router.push(href);
  };

  return (
    <>
      <header className="bg-black h-[48px]">
        <div className="text-white flex items-center justify-center h-full">
          Summer Sale for All Swim Suits and Free Express Delivery - OFF 50%!
          <Link href="/shop" className="ml-2 underline">
            Shop Now
          </Link>
        </div>
      </header>
      <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md relative">
        <Link href="/" className="text-2xl font-bold">
          Exclusive
        </Link>
        <nav className="flex space-x-8 text-gray-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </nav>
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 outline-none w-48"
          />
          <button>
            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700">
          <button onClick={() => router.push("/wishlist")}>
            <AiOutlineHeart className="w-6 h-6" />
          </button>
          <button onClick={() => router.push("/cart")}>
            <AiOutlineShoppingCart className="w-6 h-6" />
          </button>
          <button onClick={() => setShowMenu(!showMenu)} className="relative">
            <RiAccountCircleFill className="w-6 h-6" />
          </button>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-4 top-full mt-2 z-50">
            <div className="w-72 rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-800">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item.id, item.href)}
                    className={`
                      flex items-center gap-4 px-6 py-4 cursor-pointer
                      transition-all duration-200 ease-in-out
                      ${
                        activeItem === item.id
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      }
                    `}
                  >
                    <span className="text-white opacity-90">{item.icon}</span>
                    <span className="text-white text-lg font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
