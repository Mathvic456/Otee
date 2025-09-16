import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export function AboutSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
          A seasoned Business Executive and brand marketing strategist with extensive experience across music business,
          fintech, blockchain, and traditional media sectors.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Electrical & Electronics Engineering</h4>
                <p className="text-muted-foreground">University of Uyo, Akwa Ibom State</p>
                <p className="text-sm text-muted-foreground">Graduated: September 2021</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Music Business Academy Africa</h4>
                <p className="text-muted-foreground">Specialized Training</p>
                <p className="text-sm text-muted-foreground">Completed: February 2020</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Product Management Fundamentals (Udemy)</Badge>
              <Badge variant="secondary">Project Management (Coursera)</Badge>
              <Badge variant="secondary">Music Business Development (MBA Africa)</Badge>
              <Badge variant="secondary">Product Management Entry Level Certified</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Built online community to over 10,000 members within one year</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Achieved 4x increase in pre-sale value for DeFi project</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Brokered global whiskey influencer partnership (Teeling Whiskey)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Maintained steady 5,000+ event attendance per episode</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Led successful product launches across multiple industries</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
