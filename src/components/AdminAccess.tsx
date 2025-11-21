"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function AdminAccess() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Secret admin shortcut: Ctrl + Shift + A
      if (event.ctrlKey && event.shiftKey && event.key === "A") {
        router.push("/admin")
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [router])

  return null
}
