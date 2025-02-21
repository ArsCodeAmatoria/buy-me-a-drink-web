"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
// import { GlassWater } from "lucide-react"
import { Ms_Madi } from "next/font/google"
import { Bubbles } from "@/components/bubbles"
import Link from "next/link"

const msMadi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Connect with people who share your taste in beverages"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index])
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100) // Adjust typing speed here

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) // Cursor blink speed

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, []) // Ensure the dependency array is empty to run only once

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Bubbles />
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-8">
          Find Your{" "}
          <span className="text-foreground">Next</span>{" "}
          <span
            className={`${msMadi.className} text-8xl hover:text-hot-pink/80 transition-colors`}
            style={{ color: "#FF007F" }}
          >
            Drink Date
          </span>
        </h1>
        <p className="text-xl mb-12 text-muted-foreground">
          <span className="text-foreground font-semibold">
            {text}
            {showCursor && <span className="blinking-cursor">|</span>}
          </span>
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
      {/* Remove the GlassWater component */}
      {/* <GlassWater className="absolute opacity-10 w-96 h-96" /> */}
    </main>
  )
}
