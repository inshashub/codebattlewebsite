import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Users, School, Calendar, Phone, AlertCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you soon with further details.",
    })
    
    setIsSubmitting(false)
  }

  const registrationSteps = [
    {
      icon: Users,
      title: 'Form Your Team',
      description: '2-4 students per team'
    },
    {
      icon: School,
      title: 'School Details',
      description: 'UAE schools only'
    },
    {
      icon: Calendar,
      title: 'Choose Category',
      description: 'Based on grade level'
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Receive event details'
    }
  ]

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-gradient bg-clip-text text-transparent">Join the</span>{' '}
            <span className="text-foreground">Battle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to code, compete, and conquer? Register your team now for Code Battle 2024!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Registration Steps */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8">
                <span className="energy-gradient bg-clip-text text-transparent">Registration Process</span>
              </h3>
              
              {registrationSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={step.title} className="flex items-start gap-4 animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                )
              })}

              {/* Important Notice */}
              <Card className="border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-accent mb-2">Important Notice</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Registrations are currently open</li>
                        <li>• Limited spots available per category</li>
                        <li>• UAE schools only</li>
                        <li>• Teams of 2-4 students required</li>
                        <li>• Parent/guardian consent needed</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Need Help?
                </h4>
                <p className="text-muted-foreground mb-2">
                  WhatsApp or Call: <span className="text-primary font-semibold">+971 50 69 42633</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Our team is ready to assist you with registration and answer any questions!
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <Card className="battle-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="cyber-gradient bg-clip-text text-transparent">Quick Registration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Team Leader */}
                  <div className="space-y-2">
                    <Label htmlFor="leader-name">Team Leader Name</Label>
                    <Input 
                      id="leader-name" 
                      placeholder="Enter team leader's full name"
                      required
                    />
                  </div>

                  {/* School */}
                  <div className="space-y-2">
                    <Label htmlFor="school">School Name</Label>
                    <Input 
                      id="school" 
                      placeholder="Enter your school name"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cadet">Cadet (Grades 1-4)</SelectItem>
                        <SelectItem value="captain">Captain (Grades 5-8)</SelectItem>
                        <SelectItem value="colonel">Colonel (Grades 9-12)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Team Size */}
                  <div className="space-y-2">
                    <Label htmlFor="team-size">Team Size</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of team members" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 Students</SelectItem>
                        <SelectItem value="3">3 Students</SelectItem>
                        <SelectItem value="4">4 Students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="team@school.ae"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+971 50 123 4567"
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <Label htmlFor="additional">Additional Information (Optional)</Label>
                    <Textarea 
                      id="additional"
                      placeholder="Any special requirements or questions?"
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="battle-button w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Register Your Team'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration