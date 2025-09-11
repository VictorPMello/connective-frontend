import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="about" className="w-screen p-3 text-center">
      <div className="flex justify-evenly">
        <div>
          <h4 className="mb-6 text-xl">Features</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/dashboard">Customer Hub</Link>
            </li>
            <li>
              <Link href="/dashboard">Task Automation</Link>
            </li>
            <li>
              <Link href="/dashboard">Integrations</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xl">Product</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/dashboard">Pricing</Link>
            </li>
            <li>
              <Link href="/dashboard">Documentation</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xl">Company</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/dashboard">About</Link>
            </li>
            <li>
              <Link href="/dashboard">FAQ</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xl">Resources</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/dashboard">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/dashboard">Terms of Service</Link>
            </li>
            <li>
              <Link href="/dashboard">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xl">Connect</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/dashboard">LinkedIn</Link>
            </li>
            <li>
              <Link href="/dashboard">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>

      <Separator
        orientation="horizontal"
        className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto my-3"
      />

      <span>©2025 Connective Inc. All rights reserved.</span>
    </footer>
  );
}
