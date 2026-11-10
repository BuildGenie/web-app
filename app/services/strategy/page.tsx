import { Target, Route, ChartNoAxesCombined, Compass } from "lucide-react";
import { ServiceLandingPage, type ServicePageConfig } from "@/components/service-landing-page";

export const metadata = {
  title: "Strategy & Go-to-Market | BuildGenie Labs",
  description: "Turn customer insight and business priorities into positioning, growth strategy and go-to-market plans.",
};

const config: ServicePageConfig = {
  eyebrow: "STRATEGISE",
  headline: "Choose a clear direction",
  highlight: "and know what comes next.",
  intro: "Good strategy connects the opportunity, the customer and the work required to win. We help founders make deliberate choices about positioning, priorities, channels and the path to market.",
  note: "Strategy engagements are fixed-scope projects. Any primary research, paid data, media, production or third-party costs required beyond the agreed scope are proposed separately. Final scope, review rounds and timeline are confirmed before kickoff.",
  featuresHeading: "Make the important choices with confidence.",
  featuresIntro: "Strategy should make decisions easier and execution more focused. Our work turns market and customer context into a practical plan your team can act on.",
  features: [
    { title: "Positioning and proposition", description: "Clarify who you serve, the value you offer and why customers should choose you.", icon: Target },
    { title: "Audience and market focus", description: "Prioritise segments, understand alternatives and identify the strongest opportunities.", icon: Compass },
    { title: "Go-to-market planning", description: "Choose channels, sequencing, launch activity and the resources required.", icon: Route },
    { title: "Growth priorities and measures", description: "Set a focused roadmap with practical KPIs, experiments and review points.", icon: ChartNoAxesCombined },
  ],
  offersHeading: "Choose the strategy engagement you need.",
  offersIntro: "Start with a focused growth strategy or commission a deeper go-to-market plan for a launch, new product or market entry.",
  offers: [
    {
      name: "Growth Strategy Sprint", type: "One-off engagement", price: "₦250,000", timeline: "10 working days",
      description: "A focused direction-setting engagement for teams that need to organise their growth effort around a clear customer and business objective.",
      deliverables: ["Audience segments and ideal customer profile", "Positioning and value proposition", "Messaging and channel recommendations", "90-day growth roadmap and priorities", "KPIs and measurement framework"],
    },
    {
      name: "Go-to-Market Strategy", type: "One-off engagement", price: "₦450,000", timeline: "15–20 working days",
      description: "A launch-ready plan for introducing a product, entering a market or coordinating an important commercial moment.",
      deliverables: ["Market and competitor analysis", "Audience, positioning and launch messaging", "Channel mix and launch sequence", "Campaign plan, budget and activity roadmap", "Measurement framework and launch priorities"],
    },
  ],
  process: [
    { title: "Understand the context", description: "Review your business model, product, customer evidence, goals and existing constraints." },
    { title: "Make the strategic choices", description: "Develop positioning, audience focus, channel priorities and a plan of action." },
    { title: "Turn the plan into work", description: "Present the roadmap, measures and immediate next steps, with execution options where useful." },
  ],
  related: [
    { title: "Idea validation", description: "Test assumptions before locking in the strategy.", href: "/services/validate" },
    { title: "Marketing & growth", description: "Execute campaigns and build momentum.", href: "/services/marketing" },
  ],
  ctaTitle: "Move from scattered ideas", ctaHighlight: "to a focused plan.",
  ctaText: "Share the decision you are facing and the outcome you are working towards. We will help define the right strategy engagement.",
  ctaLabel: "Discuss strategy",
};
export default function StrategyPage() { return <ServiceLandingPage config={config} />; }
