import { Button } from "@/components/ui/button"
import { GlassWater } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-8">
          Find Your Next <span className="text-primary">Drink Date</span> with <span className="text-primary">Tippsy</span>
        </h1>
        <p className="text-xl mb-12">
          Connect with people who share your taste in beverages
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/login">
              Login
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signup">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
      <GlassWater className="absolute opacity-10 w-96 h-96 text-primary" />
    </main>
  )
} 