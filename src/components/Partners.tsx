import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Heart, Handshake } from 'lucide-react'

const Partners = () => {
  const partners = [
    {
      name: 'iCode Jr',
      role: 'Education Partner',
      description: 'Providing coding education and mentorship for young developers across the UAE',
      website: 'https://icodejr.com',
      logo: '/placeholder-logo-1.png',
      type: 'education'
    },
    {
      name: 'DTEC Dubai',
      role: 'Venue Partner',
      description: 'Dubai Technology Entrepreneur Centre - Supporting innovation and entrepreneurship',
      website: 'https://dtec.ae',
      logo: '/placeholder-logo-2.png',
      type: 'venue'
    }
  ]

  const supportFeatures = [
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Building a strong coding community for K-12 students'
    },
    {
      icon: Handshake,
      title: 'Industry Partnerships',
      description: 'Connecting students with tech industry professionals'
    },
    {
      icon: ExternalLink,
      title: 'Future Opportunities',
      description: 'Opening doors to coding careers and higher education'
    }
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{' '}
            <span className="cyber-gradient bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Code Battle is made possible through collaboration with leading educational institutions and technology partners
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={partner.name} className="battle-card animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-2xl font-bold">
                      {partner.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                  <p className={`font-semibold mb-4 ${
                    partner.type === 'education' ? 'text-primary' : 'text-accent'
                  }`}>
                    {partner.role}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-center mb-6">
                  {partner.description}
                </p>
                
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="energy-gradient bg-clip-text text-transparent">What We Provide</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.title} className="text-center animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                <span className="cyber-gradient bg-clip-text text-transparent">Interested in Partnering?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join us in empowering the next generation of UAE's young developers and innovators.
              </p>
              <Button className="energy-button">
                Become a Partner
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Partners