import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Zap, Rocket, Calendar, Users, Trophy } from 'lucide-react'
import codeIcon from '@/assets/code-icon.png'

const Categories = () => {
  const categories = [
    {
      title: 'Cadet',
      grades: 'Grades 1-4',
      date: 'November 16, 2024',
      description: 'Block-based programming adventure for our youngest coders',
      platform: 'Scratch, Code.org, Thunkable',
      icon: Code,
      color: 'primary',
      features: ['Visual Programming', 'Creative Projects', 'Storytelling', 'Game Design'],
      teamSize: '2-4 students',
      duration: '4 hours'
    },
    {
      title: 'Captain',
      grades: 'Grades 5-8',
      date: 'November 17, 2024',
      description: 'Bridge between blocks and text - choose your coding weapon',
      platform: 'Any block/text-based platform',
      icon: Zap,
      color: 'accent',
      features: ['Hybrid Coding', 'Problem Solving', 'App Development', 'Web Projects'],
      teamSize: '2-4 students',
      duration: '6 hours'
    },
    {
      title: 'Colonel',
      grades: 'Grades 9-12',
      date: 'November 23, 2024',
      description: 'Full-stack development mastery for advanced young developers',
      platform: 'Any programming language',
      icon: Rocket,
      color: 'primary',
      features: ['Advanced Programming', 'Full-Stack Development', 'AI/ML Projects', 'Innovation'],
      teamSize: '2-4 students',
      duration: '8 hours'
    }
  ]

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-gradient bg-clip-text text-transparent">Battle</span>{' '}
            <span className="text-foreground">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your battlefield! Each category is designed for different skill levels and age groups.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={category.title} className={`battle-card group animate-slide-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    category.color === 'primary' ? 'cyber-gradient' : 'energy-gradient'
                  }`}>
                    <IconComponent className="w-8 h-8 text-background" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <p className={`font-semibold ${
                    category.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    {category.grades}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{category.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-accent" />
                      <span>{category.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span>{category.duration}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Platform:</h4>
                    <p className="text-sm text-muted-foreground mb-4">{category.platform}</p>
                    
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {category.features.map((feature) => (
                        <div key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                          }`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full mt-6 ${
                      category.color === 'primary' ? 'battle-button' : 'energy-button'
                    }`}
                  >
                    Register for {category.title}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
            <img src={codeIcon} alt="Code" className="w-6 h-6" />
            <span className="text-muted-foreground">
              All categories include mentorship, prizes, and certificates!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories