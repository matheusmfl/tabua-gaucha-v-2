'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent')
    if (hasConsented === null || hasConsented === 'false') {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-20 bg-white rounded-lg border border-gray-200 p-6 shadow-xl md:max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-1">Este site usa cookies</h2>
          <p className="text-sm text-gray-600">
            Utilizamos cookies para oferecer a melhor experiência possível. Ao aceitar, você concorda com o uso de cookies em nosso site e essa mensagem não aparecerá para você novamente.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
          <Button variant="outline" className="text-sm" onClick={handleDecline}>
            Recusar
          </Button>
          <Button className="text-sm" onClick={handleAccept}>
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
