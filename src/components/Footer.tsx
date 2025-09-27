import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Register', href: '#register' },
    { name: 'Winners', href: '#winners' },
    { name: 'Partners', href: '#partners' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp/Call',
      value: '+971 50 69 42633',
      href: 'tel:+971506942633'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@codebattle.tech',
      href: 'mailto:info@codebattle.tech'
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'DTEC A5, Dubai Digital Park',
      href: 'https://maps.google.com/?q=DTEC+Dubai+Digital+Park'
    }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              <span className="cyber-gradient bg-clip-text text-transparent">CODE</span>{' '}
              <span className="energy-gradient bg-clip-text text-transparent">BATTLE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              UAE's largest inter-school hackathon empowering K-12 students to think, code, and innovate.
            </p>
            <div className="flex flex-col gap-2">
              <Button className="battle-button w-full">
                Register Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon
                return (
                  <li key={contact.label} className="flex items-start gap-2">
                    <IconComponent className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">{contact.label}</div>
                      <a 
                        href={contact.href}
                        className="text-sm hover:text-primary transition-colors"
                        {...(contact.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {contact.value}
                        {contact.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 inline ml-1" />
                        )}
                      </a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Event Details</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-muted-foreground">Dates</div>
                <div>November 16-23, 2024</div>
              </div>
              <div>
                <div className="text-muted-foreground">Categories</div>
                <div>Cadet • Captain • Colonel</div>
              </div>
              <div>
                <div className="text-muted-foreground">Registration</div>
                <div className="text-accent font-medium">Now Open!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Code Battle. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground">Powered by</span>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-primary">iCode Jr</span>
                <div className="w-px h-4 bg-border" />
                <span className="font-semibold text-accent">DTEC Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer