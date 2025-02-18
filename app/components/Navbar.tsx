"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
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