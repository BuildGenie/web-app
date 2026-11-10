import { Blocks, Code2, Smartphone, BrainCircuit, Workflow, ShieldCheck } from "lucide-react";
import { ServiceLandingPage, type ServicePageConfig } from "@/components/service-landing-page";

export const metadata = {
  title: "Technology & Product Development | BuildGenie Labs",
  description: "Build digital products, web and mobile applications, AI-enabled workflows and reliable technology foundations with BuildGenie Labs.",
  alternates: { canonical: "/services/technology" },
  openGraph: {
    type: "website",
    title: "Technology & Product Development | BuildGenie Labs",
    description: "Build digital products, web and mobile applications, AI-enabled workflows and reliable technology foundations.",
    url: "/services/technology",
  },
};

const config: ServicePageConfig = {
  eyebrow: "TECHNOLOGY & PRODUCTS",
  headline: "Turn good ideas into",
  highlight: "useful digital products.",
  intro: "We help teams shape, build and improve the technology behind their business — from early product definition and user experience to web and mobile engineering, integrations and applied AI.",
  note: "Technology projects are scoped individually. Fees depend on product complexity, platform, integrations, delivery milestones and team capacity. We begin with a brief and, where needed, a paid discovery phase before proposing a build budget. Third-party licences, cloud infrastructure and external services are separate.",
  featuresHeading: "From product thinking to reliable delivery.",
  featuresIntro: "We bring product judgement and engineering execution together so the solution is grounded in user needs, commercially useful and maintainable beyond the first release.",
  features: [
    { title: "Product discovery and definition", description: "Clarify the user problem, product scope, requirements and release priorities.", icon: Blocks },
    { title: "Web and mobile engineering", description: "Design and build responsive web applications and native or cross-platform mobile experiences.", icon: Smartphone },
    { title: "AI and automation", description: "Apply AI, integrations and workflow automation to practical business problems.", icon: BrainCircuit },
    { title: "Architecture and reliability", description: "Make sound technical decisions around security, performance, scale and maintainability.", icon: ShieldCheck },
    { title: "Systems and integrations", description: "Connect tools, APIs and business systems to reduce manual work and improve flow.", icon: Workflow },
    { title: "Technical advisory", description: "Get experienced input on architecture, engineering processes, team structure and delivery decisions.", icon: Code2 },
  ],
  offersHeading: "Engage around the stage of your product.",
  offersIntro: "Technology work is rarely one-size-fits-all. We shape the team, milestones and delivery model around what needs to be discovered, built or improved.",
  offers: [
    {
      name: "Product discovery", type: "Fixed-scope sprint", price: "Custom scope", timeline: "Agreed at kickoff",
      description: "Establish the product direction and the work required before committing to a larger build.",
      deliverables: ["Product goals and user problem definition", "Requirements and feature prioritisation", "User flows and technical considerations", "Milestone plan and delivery estimate"],
    },
    {
      name: "Product design & engineering", type: "Project or dedicated capacity", price: "Custom proposal", timeline: "Milestone-based",
      description: "Design, build and iterate on the digital product your customers and operations need.",
      deliverables: ["UX and interface design", "Web and/or mobile application development", "Backend, APIs and integrations", "Testing, release support and handover"],
    },
    {
      name: "Technical advisory", type: "Advisory engagement", price: "Scoped to requirement", timeline: "One-off or recurring",
      description: "Bring senior technical perspective to important decisions, reviews and delivery challenges.",
      deliverables: ["Architecture and codebase reviews", "Technology and infrastructure recommendations", "Engineering workflow and team guidance", "Prioritised technical action plan"],
    },
  ],
  process: [
    { title: "Frame the problem", description: "Understand users, business objectives, existing systems, constraints and success measures." },
    { title: "Shape the solution", description: "Agree product scope, technical approach, milestones, responsibilities and delivery economics." },
    { title: "Build, test and improve", description: "Deliver in visible increments, review progress and hand over maintainable work." },
  ],
  related: [
    { title: "Strategy & validation", description: "Validate the opportunity and define what to build.", href: "/services/strategy" },
    { title: "Specialist services", description: "Bring focused skills into a product or launch.", href: "/services/specialist" },
  ],
  ctaTitle: "Build the right thing", ctaHighlight: "and build it well.",
  ctaText: "Tell us about your product, the problem you are solving and where you need technical support.",
  ctaLabel: "Discuss a product",
};
export default function TechnologyPage() { return <ServiceLandingPage config={config} />; }
