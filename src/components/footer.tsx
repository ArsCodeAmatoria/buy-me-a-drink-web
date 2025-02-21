"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex justify-center items-center p-8 border-t bg-background text-muted-foreground">
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link href="/services" className="hover:text-foreground">Our Services</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-foreground">Customer Support</Link></li>
            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
            <li><Link href="/partners" className="hover:text-foreground">Partners</Link></li>
            <li><Link href="/press" className="hover:text-foreground">Press</Link></li>
            <li><Link href="/investors" className="hover:text-foreground">Investors</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <Link href="https://github.com" aria-label="GitHub" className="hover:text-foreground">
                <Github className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-foreground">
                <Linkedin className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-foreground">
                <Twitter className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-foreground">
                <Youtube className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 