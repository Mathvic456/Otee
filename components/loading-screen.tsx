"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show loading screen for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-card border-4 border-accent/30 flex items-center justify-center">
              <img
                src="/professional-headshot-of-young-black-man-in-busine.jpg"
                alt="Otoabasi Joseph Bassey"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            <span className="text-accent">Otoabasi</span> Joseph Bassey
          </h2>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
        <Loader2 className="h-6 w-6 animate-spin mx-auto text-accent" />
      </div>
    </div>
  )
}
