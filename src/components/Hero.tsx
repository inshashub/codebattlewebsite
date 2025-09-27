import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'
import heroBg from '@/assets/hero-bg.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-battle-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-battle-pulse delay-300" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-battle-pulse delay-700" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full animate-battle-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Event Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-slide-in">
          <span className="text-primary font-semibold text-sm">
            REGISTRATIONS NOW OPEN!
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in delay-200">
          <span className="block mb-2">
            <span className="cyber-gradient bg-clip-text text-transparent">THINK.</span>{' '}
            <span className="energy-gradient bg-clip-text text-transparent">CODE.</span>{' '}
            <span className="cyber-gradient bg-clip-text text-transparent">INNOVATE.</span>
          </span>
          <span className="block text-4xl md:text-5xl text-foreground/90">
            CODE BATTLE 2024
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in delay-400">
          UAE's largest inter-school hackathon for K-12 students. Join the ultimate coding competition and showcase your innovation!
        </p>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-muted-foreground animate-slide-in delay-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>November 16-23, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span>DTEC, Dubai Digital Park</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span>K-12 Students</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in delay-800">
          <Button className="battle-button text-lg px-8 py-4 animate-glow">
            Register Your Team
          </Button>
          <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:border-primary hover:bg-primary/10">
            View Categories
          </Button>
        </div>

        {/* Partners */}
        <div className="mt-16 animate-slide-in delay-1000">
          <p className="text-sm text-muted-foreground mb-6">Powered by</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-70">
            <div className="text-2xl font-bold text-primary">iCode Jr</div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-2xl font-bold text-accent">DTEC Dubai</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero