import { Headset, MessageCircle, ClipboardList, ShieldCheck } from "lucide-react";
import { ServiceLandingPage, type ServicePageConfig } from "@/components/service-landing-page";

export const metadata = {
  title: "Customer Support Services | BuildGenie Labs",
  description: "Build reliable customer support operations, help content and feedback loops with BuildGenie Labs.",
};

const config: ServicePageConfig = {
  eyebrow: "CUSTOMER SUPPORT",
  headline: "Keep customers supported",
  highlight: "as your product grows.",
  intro: "Customer experience continues after acquisition. We help startups create responsive support operations, give customers clearer answers and turn recurring questions into product and business insight.",
  note: "Monthly support fees start from ₦180,000. Final pricing depends on channels, agreed coverage hours, ticket volume, response expectations, complexity and escalation requirements. 24/7 coverage, specialist technical support and additional languages are not included unless explicitly scoped.",
  featuresHeading: "Support that helps customers move forward.",
  featuresIntro: "The right support setup creates consistency for customers and visibility for your team. We can establish the operation, provide ongoing support capacity or improve the feedback loop.",
  features: [
    { title: "Support workflows", description: "Set up channels, queues, ownership, escalation paths and response expectations.", icon: Workflow },
    { title: "Customer conversations", description: "Handle enquiries and recurring issues through the agreed channels and coverage window.", icon: MessageCircle },
    { title: "Help content and FAQs", description: "Create clear answers, response templates and knowledge resources for common questions.", icon: ClipboardList },
    { title: "Quality and escalation", description: "Track patterns, identify unresolved issues and route product or account risks to the right owner.", icon: ShieldCheck },
  ],
  offersHeading: "Start with a reliable setup or add ongoing capacity.",
  offersIntro: "Choose a one-off setup engagement or a monthly support arrangement. Both are scoped around your customers, channels and operating needs.",
  offers: [
    {
      name: "Support Playbook & FAQ Setup", type: "One-off engagement", price: "₦150,000", timeline: "Scoped project",
      description: "Establish the foundations for a consistent customer support experience.",
      deliverables: ["Support channel and workflow recommendations", "Response guidelines and escalation paths", "FAQ and response-template starter set", "Issue categorisation and handover process"],
    },
    {
      name: "Ongoing Customer Support", type: "Monthly service", price: "From ₦180,000 / month", timeline: "Monthly",
      description: "Add customer support capacity under an agreed coverage and service scope.",
      deliverables: ["Support handling across agreed channels", "Defined operating hours and response expectations", "Escalation of product and account issues", "Recurring issue and customer feedback summary"],
    },
  ],
  process: [
    { title: "Understand your customers", description: "Review your product, common enquiries, support channels, customer volume and service expectations." },
    { title: "Agree the operating model", description: "Set coverage, response standards, access, escalation ownership and reporting." },
    { title: "Support and improve", description: "Handle conversations, surface recurring friction and feed useful insight back to your team." },
  ],
  related: [
    { title: "Marketing & growth", description: "Connect customer feedback to acquisition and retention.", href: "/services/marketing" },
    { title: "Specialist services", description: "Explore other focused execution capabilities.", href: "/services/specialist" },
  ],
  ctaTitle: "Make every customer", ctaHighlight: "feel looked after.",
  ctaText: "Tell us about your customer channels, expected volume and the kind of support experience you want to provide.",
  ctaLabel: "Discuss customer support",
};
export default function SupportPage() { return <ServiceLandingPage config={config} />; }
