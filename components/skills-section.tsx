import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, TrendingUp, Users, Palette, Music, DollarSign, Globe, Target } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Brand Marketing & Strategy",
      icon: <Megaphone className="h-6 w-6" />,
      skills: [
        "Brand Development & Strategy",
        "Strategic Planning",
        "Content Creation & Distribution",
        "Digital Marketing & Social Media Management",
      ],
    },
    {
      title: "Business Development",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ["Product & Project Management", "Investment Brokerage", "Partnership Development", "Market Analysis"],
    },
    {
      title: "Community & Talent Management",
      icon: <Users className="h-6 w-6" />,
      skills: ["Community Management", "Talent Acquisition & Management", "Team Leadership", "Stakeholder Relations"],
    },
    {
      title: "Creative & Content",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Copywriting", "Photography", "Web/Media Management", "Content Strategy"],
    },
    {
      title: "Music Business",
      icon: <Music className="h-6 w-6" />,
      skills: ["Artist/Label Management", "Music Distribution", "Publishing Strategies", "Content Investment"],
    },
    {
      title: "Fintech & Investment",
      icon: <DollarSign className="h-6 w-6" />,
      skills: ["DeFi Project Management", "Investment Strategy", "Financial Partnerships", "Blockchain Projects"],
    },
  ]

  const industries = [
    { name: "Music Business", icon: <Music className="h-5 w-5" /> },
    { name: "Fintech & DeFi", icon: <DollarSign className="h-5 w-5" /> },
    { name: "Technology", icon: <Globe className="h-5 w-5" /> },
    { name: "Media & PR", icon: <Megaphone className="h-5 w-5" /> },
    { name: "Fashion", icon: <Palette className="h-5 w-5" /> },
    { name: "Spirits & Beverages", icon: <Target className="h-5 w-5" /> },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Skills & Expertise</h2>
        <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
          Comprehensive skill set spanning brand marketing, business development, and creative strategy across multiple
          industries.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                <div className="text-accent flex-shrink-0">{category.icon}</div>
                <span className="text-balance leading-tight">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-xs leading-tight">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Industry Experience</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 bg-card px-3 py-3 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="text-accent flex-shrink-0">{industry.icon}</div>
              <span className="text-sm font-medium text-center leading-tight">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
