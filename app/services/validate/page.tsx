import { Search, UsersRound, MessageSquareText, Lightbulb } from "lucide-react";
import { ServiceLandingPage, type ServicePageConfig } from "@/components/service-landing-page";

export const metadata = {
  title: "Idea Validation | BuildGenie Labs",
  description: "Test your problem, audience and proposition with a focused validation sprint from BuildGenie Labs.",
  alternates: { canonical: "/services/validate" },
  openGraph: {
    type: "website",
    title: "Idea Validation | BuildGenie Labs",
    description: "Test your problem, audience and proposition with a focused validation sprint from BuildGenie Labs.",
    url: "/services/validate",
  },
};

const config: ServicePageConfig = {
  eyebrow: "VALIDATE",
  headline: "Test the opportunity",
  highlight: "before you scale it.",
  intro: "Turn assumptions into useful evidence. We help founders test whether the problem matters, who feels it most and whether the proposed solution earns enough interest to justify the next investment.",
  note: "The participant cohort is a planning ceiling, not a guaranteed number of activated users. Recruitment depends on audience availability and product readiness. Advertising spend, incentives and third-party research costs are separate and approved before work begins.",
  featuresHeading: "Learn what deserves your next commitment.",
  featuresIntro: "Validation is not a rubber stamp. It is a structured way to expose the riskiest assumptions early and make your next product or business decision with better evidence.",
  features: [
    { title: "Problem discovery", description: "Clarify the problem, the people experiencing it and how they currently solve it.", icon: Search },
    { title: "Audience understanding", description: "Identify likely early adopters, their context, motivations and barriers.", icon: UsersRound },
    { title: "Proposition testing", description: "Test value propositions, messages and solution concepts with relevant people.", icon: MessageSquareText },
    { title: "Evidence and direction", description: "Bring findings together into clear assumptions, risks and recommended next steps.", icon: Lightbulb },
  ],
  offersHeading: "A focused sprint with a defined outcome.",
  offersIntro: "A single engagement for founders who want to test an idea, proposition or market before committing to a larger build or growth programme.",
  offers: [{
    name: "Validate Sprint", type: "One-off engagement", price: "₦250,000", timeline: "10–15 working days",
    description: "A practical validation cycle to test the riskiest assumptions and gather structured feedback from a relevant target cohort.",
    deliverables: ["Target user and assumption map", "Competitor and alternative landscape", "Problem, proposition and message testing", "Targeted outreach to up to 25 qualified product-trial participants", "Feedback synthesis and validation report", "Recommended next steps and decision points"],
  }],
  process: [
    { title: "Define what must be true", description: "Agree the target segment, core assumptions and the evidence needed to make a decision." },
    { title: "Run the validation work", description: "Conduct research, targeted outreach and proposition or product-trial testing." },
    { title: "Make the next decision", description: "Review findings, identify what remains uncertain and prioritise what to build or test next." },
  ],
  related: [
    { title: "Strategy & go-to-market", description: "Turn validated insight into a focused plan.", href: "/services/strategy" },
    { title: "Marketing & growth", description: "Put the proposition in front of customers.", href: "/services/marketing" },
  ],
  ctaTitle: "Get evidence before", ctaHighlight: "you make the bigger bet.",
  ctaText: "Tell us what you are testing, who you want to reach and which decision you need to make.",
  ctaLabel: "Plan a validation sprint",
};
export default function ValidatePage() { return <ServiceLandingPage config={config} />; }
