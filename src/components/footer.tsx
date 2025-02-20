
import Link from "next/link";
import { Olive } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex justify-center items-center p-8 border-t bg-background text-muted-foreground">
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Products</h3>
          <ul className="space-y-1">
            <li><Link href="#">AI</Link></li>
            <li><Link href="#">Enterprise</Link></li>
            <li><Link href="#">Next.js</Link></li>
            <li><Link href="#">Observability</Link></li>
            <li><Link href="#">Previews</Link></li>
            <li><Link href="#">Rendering</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Turbo</Link></li>
            <li><Link href="#">v0</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><Link href="#">Community</Link></li>
            <li><Link href="#">Docs</Link></li>
            <li><Link href="#">Guides</Link></li>
            <li><Link href="#">Help</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Resources</Link></li>
            <li><Link href="#">Solution Partners</Link></li>
            <li><Link href="#">Templates</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Changelog</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Partners</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Legal</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <ul className="space-y-1">
            <li><Link href="#">GitHub</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">YouTube</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Olive className="h-6 w-6 text-muted-foreground" />
      </div>
    </footer>
  );
} 