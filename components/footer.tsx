import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Otoabasi Joseph Bassey</h3>
                <p className="text-sm opacity-80">Business Executive & Brand Strategist</p>
              </div>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              Crafting innovative brand development strategies that drive business growth and success. Specializing in
              startup brands and achieving key performance indicators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="opacity-80 hover:opacity-100 transition-opacity">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="opacity-80 hover:opacity-100 transition-opacity">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="opacity-90">Oteejoe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="opacity-90">+234 907 381 0224</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="opacity-90">Uyo, Akwa Ibom State</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© 2024 Otoabasi Joseph Bassey. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
