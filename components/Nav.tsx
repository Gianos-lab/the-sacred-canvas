"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-full bg-[hsl(var(--nav-bg))]/85 backdrop-blur-md transition-transform duration-300 transform-gpu z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-[#b87333] transition-colors"
        >
          The Sacred Canvas
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-[#555555] font-medium">
          <li>
            <Link
              href="/"
              className={`hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`hover:text-primary transition-colors ${
                pathname.startsWith("/blog") ? "text-primary" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-primary transition-colors ${
                pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } bg-[hsl(var(--nav-bg))] md:hidden shadow-md`}
      >
        <ul className="space-y-4 p-4 text-[#555555] font-medium">
          <li>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block hover:text-primary transition-colors ${
                pathname.startsWith("/blog") ? "text-primary" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block hover:text-primary transition-colors ${
                pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
