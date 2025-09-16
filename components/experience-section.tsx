import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Head of Marketing/Brand Partnerships",
      company: "Vibes Barn",
      location: "Remote, Uyo, Akwa Ibom State",
      period: "01/2024 - Present",
      description:
        "Managed partnerships with brands across Fashion, Technology, fintech, Wines and spirits for brand marketing and promotions. Monitored KPI achievement and led content creation for marketing campaigns.",
      achievements: [
        "Setup and Brokered a global whiskey influencer partnership (Teeling Whiskey)",
        "Built online community to over 10,000 members within one year",
        "Achieved steady 5,000+ attendees per episode",
      ],
    },
    {
      title: "Executive Officer",
      company: "RAD Digital",
      location: "Remote, Uyo, Akwa Ibom State",
      period: "09/2020 - 08/2024",
      description:
        "Led brand development, talent acquisition, and music investment initiatives. Directed content creation, distribution strategies, and partnerships for music brands.",
      achievements: [
        "Spearheaded comprehensive brand development strategies",
        "Managed talent acquisition and investment portfolios",
        "Developed strategic partnerships across multiple sectors",
      ],
    },
    {
      title: "Product Manager",
      company: "Clique Africa",
      location: "Remote, Nigeria",
      period: "02/2024 - 07/2024",
      description:
        "Analyzed product objectives and market research to assess strategies. Developed product documents outlining development roadmap, rollout, and marketing strategy.",
      achievements: [
        "Assembled and led team of web developers and designers",
        "Built entertainment/creative website for GenZ and Millennial audiences",
        "Collaborated with independent creatives for content generation",
      ],
    },
    {
      title: "Chief Marketing Officer",
      company: "Yield 24 (DeFi)",
      location: "Remote, Akwa Ibom State",
      period: "12/2023 - 03/2024",
      description:
        "Led the development and execution of marketing strategy, contributing to successful product launch. Expanded product roadmaps and prioritized features based on customer feedback.",
      achievements: [
        "Achieved 4x increase in pre-sale value",
        "Hosted daily Twitter spaces and Telegram AMA sessions",
        "Negotiated listing partnerships and managed community engagement",
      ],
    },
    {
      title: "Director Content Investment (Africa)",
      company: "Wahoo Music",
      location: "Remote, Nigeria",
      period: "09/2022 - 02/2024",
      description:
        "Oversaw music content investment, artist acquisition, and management. Spearheaded distribution, publishing strategies, and brand development for African artists.",
      achievements: [
        "Managed content investment across Nigeria, Ghana, and Kenya",
        "Developed distribution and publishing strategies",
        "Led brand development for emerging African artists",
      ],
    },
    {
      title: "Radio Host",
      company: "Atlantic FM",
      location: "Akwa Ibom State",
      period: "09/2015 - 11/2022",
      description: "Created and hosted radio content and podcasts. Conducted interviews and managed radio programming.",
      achievements: [
        "Developed engaging radio content and programming",
        "Conducted high-profile interviews",
        "Built strong listener engagement and community",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Over 8 years of diverse experience across music business, fintech, technology, and media sectors.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-accent">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
