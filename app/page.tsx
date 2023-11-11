'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"

export default function Home() {
  const [isSignedIn, setisSignedIn] = useState(true)
  const router = useRouter()

  if (!isSignedIn) return router.push('/signup')

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hi
      </main>
    </>

  )
}
