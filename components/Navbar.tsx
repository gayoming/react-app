"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            홈
          </Link>
        </li>
        <li>
          <Link href="/login" className={pathname === "/login" ? "font-bold" : ""}>
            LOGIN
          </Link>
        </li>
        <li>
          <Link href="/join" className={pathname === "/join" ? "font-bold" : ""}>
            JOIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}