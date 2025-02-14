"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            홈
          </Link>
        </li>
        <li>
          <Link href="/login">
            LOGIN
          </Link>
        </li>
        <li>
          <Link href="/join">
            JOIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}