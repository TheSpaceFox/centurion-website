"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Shield, ArrowRight } from "lucide-react"

export function CheckoutSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // In production, this would redirect to Airwallex payment
    alert("In production, this would redirect to Airwallex payment processing.")
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="checkout" className="py-32 px-6 bg-card/50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground tracking-[0.4em] text-xs uppercase mb-6">
            Your Move
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-balance">
            Your sovereign mind. In a box.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Form fields */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label 
                htmlFor="fullName" 
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-input border-border h-12 focus:border-foreground/50 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="title" 
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              >
                Executive Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="bg-input border-border h-12 focus:border-foreground/50 transition-colors"
                placeholder="e.g., CEO, Managing Partner"
              />
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              >
                Secure Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input border-border h-12 focus:border-foreground/50 transition-colors"
                placeholder="Your secure email address"
              />
            </div>
          </div>

          {/* Payment summary */}
          <div className="border border-border p-6 space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Shield className="w-4 h-4" />
              <span>Powered by Airwallex</span>
            </div>
            
            <div className="flex items-baseline justify-between">
              <span className="text-muted-foreground text-sm">Amount Due Today</span>
              <div className="text-right">
                <p className="font-serif text-3xl font-light">$10,000</p>
                <p className="text-xs text-muted-foreground">USD (10% Fully Refundable Deposit)</p>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                Initialize Protocol
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>

          {/* Security note */}
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="w-3 h-3" />
            256-bit encryption. Your data never touches our servers.
          </p>
        </form>
      </div>
    </section>
  )
}
