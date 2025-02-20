"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/signup'

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link 
          href="/" 
          className={`text-4xl font-normal text-hot-pink hover:text-hot-pink/80 transition-colors pl-4 ${className}`}
        >
          Tippsy
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {!isAuthPage && (
            <nav className="flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link href="/profile">
                  Profile
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/matches">
                  Matches
                </Link>
              </Button>
            </nav>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
