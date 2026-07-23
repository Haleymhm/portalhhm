"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer relative light bg-[var(--section-light)] xl:ml-[300px] px-4 py-8"
    >
      <div className="container mx-auto">
        <div className="copyright text-center text-sm">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 font-bold">
              <Link href="/" className="hover:text-[var(--accent)]">
                {profile.name}
              </Link>
            </strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits mt-3 text-center text-xs text-gray-500">
          Designed by{" "}
          <a
            href="https://bootstrapmade.com/"
            className="text-[var(--accent)] hover:underline"
          >
            BootstrapMade
          </a>{" "}
          |{" "}
          <a
            href="https://bootstrapmade.com/tools/"
            className="text-[var(--accent)] hover:underline"
          >
            DevTools
          </a>
        </div>
      </div>
    </footer>
  );
}

