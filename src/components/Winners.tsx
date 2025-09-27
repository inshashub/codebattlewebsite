import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Medal, Star, Award } from 'lucide-react'
import trophyIcon from '@/assets/trophy-icon.png'

const Winners = () => {
  const pastWinners = [
    {
      year: '2023',
      category: 'Colonel',
      team: 'Code Warriors',
      school: 'Dubai International Academy',
      project: 'Smart City Traffic Management System',
      achievement: 'Grand Champion'
    },
    {
      year: '2023',
      category: 'Captain',
      team: 'Digital Dreamers',
      school: 'GEMS Modern Academy',
      project: 'Eco-Friendly School App',
      achievement: 'Innovation Award'
    },
    {
      year: '2023',
      category: 'Cadet',
      team: 'Future Coders',
      school: 'American School of Dubai',
      project: 'Interactive Story Game',
      achievement: 'Creativity Champion'
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: '500+',
      subtitle: 'Students Participated',
      color: 'primary'
    },
    {
      icon: Medal,
      title: '50+',
      subtitle: 'Schools Represented',
      color: 'accent'
    },
    {
      icon: Star,
      title: '150+',
      subtitle: 'Innovative Projects',
      color: 'primary'
    },
    {
      icon: Award,
      title: '3',
      subtitle: 'Years Running',
      color: 'accent'
    }
  ]

  return (
    <section id="winners" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <img src={trophyIcon} alt="Trophy" className="w-12 h-12" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="energy-gradient bg-clip-text text-transparent">Hall of</span>{' '}
              <span className="text-foreground">Fame</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the brilliant minds and innovative projects from past Code Battle competitions
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={achievement.title} className="text-center animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  achievement.color === 'primary' ? 'cyber-gradient' : 'energy-gradient'
                }`}>
                  <IconComponent className="w-8 h-8 text-background" />
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.title}</div>
                <div className="text-muted-foreground text-sm">{achievement.subtitle}</div>
              </div>
            )
          })}
        </div>

        {/* Past Winners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="cyber-gradient bg-clip-text text-transparent">2023 Champions</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastWinners.map((winner, index) => (
              <Card key={winner.team} className="battle-card animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-yellow-900" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{winner.team}</h4>
                  <p className="text-primary font-semibold mb-1">{winner.school}</p>
                  <p className="text-muted-foreground text-sm mb-4">{winner.category} Category</p>
                  
                  <div className="border-t border-border pt-4">
                    <h5 className="font-semibold mb-2">Winning Project:</h5>
                    <p className="text-sm text-muted-foreground mb-3">{winner.project}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-accent text-sm font-medium">{winner.achievement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                <span className="cyber-gradient bg-clip-text text-transparent">Success Stories</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                "Code Battle gave our students a platform to showcase their creativity and problem-solving skills. 
                The competition format and mentorship provided invaluable learning experiences."
              </p>
              <div className="text-sm">
                <p className="font-semibold">Ms. Sarah Ahmed</p>
                <p className="text-muted-foreground">Computer Science Teacher, GEMS Modern Academy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Winners