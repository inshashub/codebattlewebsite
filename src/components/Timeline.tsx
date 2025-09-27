import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Trophy, Users, Zap } from 'lucide-react'

const Timeline = () => {
  const events = [
    {
      date: 'November 16',
      title: 'Cadet Competition',
      time: '9:00 AM - 1:00 PM',
      location: 'DTEC A5, Dubai Digital Park',
      description: 'Young coders showcase their creativity with block-based programming',
      icon: Users,
      color: 'primary'
    },
    {
      date: 'November 17',
      title: 'Captain Competition',
      time: '9:00 AM - 3:00 PM',
      location: 'DTEC A5, Dubai Digital Park',
      description: 'Middle school students battle with hybrid coding approaches',
      icon: Zap,
      color: 'accent'
    },
    {
      date: 'November 23',
      title: 'Colonel Competition',
      time: '9:00 AM - 5:00 PM',
      location: 'DTEC A5, Dubai Digital Park',
      description: 'High school developers compete with advanced programming skills',
      icon: Trophy,
      color: 'primary'
    }
  ]

  const scheduleDetails = [
    { time: '8:30 AM', activity: 'Registration & Check-in', icon: Users },
    { time: '9:00 AM', activity: 'Opening Ceremony', icon: Zap },
    { time: '9:30 AM', activity: 'Challenge Briefing', icon: Clock },
    { time: '10:00 AM', activity: 'Coding Battle Begins!', icon: Trophy },
    { time: '12:00 PM', activity: 'Lunch Break (Cadet ends)', icon: Users },
    { time: '1:00 PM', activity: 'Afternoon Session', icon: Clock },
    { time: '4:00 PM', activity: 'Final Presentations', icon: Zap },
    { time: '5:00 PM', activity: 'Awards Ceremony', icon: Trophy }
  ]

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Event</span>{' '}
            <span className="energy-gradient bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three action-packed days of coding competitions across different skill levels
          </p>
        </div>

        {/* Main Events Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary h-full opacity-30" />
            
            <div className="space-y-12">
              {events.map((event, index) => {
                const IconComponent = event.icon
                return (
                  <div key={event.date} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card className="battle-card animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                        <CardContent className="p-6">
                          <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              event.color === 'primary' ? 'cyber-gradient' : 'energy-gradient'
                            }`}>
                              <IconComponent className="w-6 h-6 text-background" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">{event.title}</h3>
                              <p className={`font-semibold ${
                                event.color === 'primary' ? 'text-primary' : 'text-accent'
                              }`}>
                                {event.date}
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-accent" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 w-6 h-6 rounded-full border-4 border-background" 
                         style={{ backgroundColor: event.color === 'primary' ? 'hsl(195 100% 50%)' : 'hsl(16 100% 60%)' }}>
                      <div className="absolute inset-0 rounded-full animate-battle-pulse" 
                           style={{ backgroundColor: event.color === 'primary' ? 'hsl(195 100% 50%)' : 'hsl(16 100% 60%)' }} />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="w-full md:w-5/12" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="cyber-gradient bg-clip-text text-transparent">Daily Schedule</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {scheduleDetails.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={item.time} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border animate-slide-in" 
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{item.time}</div>
                    <div className="text-xs text-muted-foreground">{item.activity}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline