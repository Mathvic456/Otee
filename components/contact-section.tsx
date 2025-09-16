"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Twitter, Loader2 } from "lucide-react"
import { SuccessModal } from "./success-modal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/mgvylbyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccessModal(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const references = [
    {
      name: "Mr Barikumo Ado",
      title: "Zonal Director",
      company: "Federal Radio Cooperation of Nigeria (Port Harcourt zone)",
      phone: "+2348033420800",
    },
    {
      name: "Ekemini Obop",
      title: "Head of Operations",
      company: "Next step Music/Audiomack Ambassador (Nigeria)",
      phone: "",
    },
    {
      name: "Nseobong Emmanuel",
      title: "General Manager",
      company: "Atlantic FM Uyo",
      phone: "+2348036208817",
    },
    {
      name: "Gilbert Bani (AQ)",
      title: "CEO",
      company: "Cake Bizness",
      phone: "+234 803 354 4606",
    },
  ]

  return (
    <>
      <section id="contact" className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to collaborate on your next brand marketing project? Let's discuss how we can drive your business
              growth together.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-muted-foreground text-sm sm:text-base break-all">Oteejoe@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Phone</p>
                      <p className="text-muted-foreground text-sm sm:text-base">+234 907 381 0224</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Location</p>
                      <p className="text-muted-foreground text-sm sm:text-base text-pretty">
                        371b Nwaniba Road, Uyo, Akwa Ibom State, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t">
                    <p className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Connect on Social Media</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button variant="outline" size="sm" className="justify-start bg-transparent text-sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start bg-transparent text-sm">
                        <Twitter className="h-4 w-4 mr-2" />
                        @oteejoe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Professional References</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {references.map((ref, index) => (
                      <div key={index} className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-medium text-foreground text-balance text-sm sm:text-base">{ref.name}</h4>
                        <p className="text-xs sm:text-sm text-accent">{ref.title}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground text-balance">{ref.company}</p>
                        {ref.phone && <p className="text-xs sm:text-sm text-muted-foreground mt-1">{ref.phone}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="text-sm sm:text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  )
}
