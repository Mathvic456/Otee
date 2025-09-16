import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Phone, MapPin, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 glow-effect">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <img
                    src="/Image.png"
                    alt="Otoabasi Joseph Bassey"
                    className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-primary text-primary-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                Available for Projects
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                Business Executive & Brand Strategist
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance">
                <span className="gradient-text">Otoabasi</span>
                <br />
                <span className="text-foreground">Joseph Bassey</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting innovative brand development strategies that drive business growth and success. Empowering
                startup brands to achieve KPIs that attract investment and partnership opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect">
                <a href="#contact" className="flex items-center gap-2">
                  Let's Work Together
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a
                  href="/Resume.pdf"
                  download
                  className="flex items-center"
                >
                <Download className="h-4 w-4 mr-2" />
                Download CV
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6 lg:pt-8">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+234 907 381 0224</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium break-all">Oteejoe@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Uyo, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
