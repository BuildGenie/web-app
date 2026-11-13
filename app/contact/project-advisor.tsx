"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Compass,
  Lightbulb,
  Mail,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Code2,
  Headset,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trackEvent } from "@/components/analytics";

type Goal = "validate" | "strategy" | "growth" | "brand" | "technology" | "support";
type Stage = "idea" | "building" | "launching" | "traction" | "established";
type ChoiceAction = "goal" | "stage" | "need";

type Choice = {
  label: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
};

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  choices?: Choice[];
  action?: ChoiceAction;
  recommendation?: Recommendation;
  startingPoint?: string;
};

type Offer = {
  name: string;
  price: string;
  cadence: string;
  timeline: string;
  description: string;
  href: string;
  tag?: string;
};

type Recommendation = {
  title: string;
  intro: string;
  why: string;
  offers: Offer[];
  practicalTitle: string;
  practicalSteps: string[];
};

type AdvisorContext = {
  goal?: Goal;
  stage?: Stage;
  need?: string;
  notes: string[];
};

const goalChoices: (Choice & { icon: LucideIcon })[] = [
  { label: "Validate an idea", value: "validate", description: "Test an opportunity before investing more.", icon: Search },
  { label: "Find a clear direction", value: "strategy", description: "Positioning, business strategy or go-to-market.", icon: Compass },
  { label: "Get more customers", value: "growth", description: "Marketing, acquisition and sustainable growth.", icon: BarChart3 },
  { label: "Build a stronger brand", value: "brand", description: "Identity, positioning, content and creative.", icon: Palette },
  { label: "Build a digital product", value: "technology", description: "Websites, e-commerce, software and AI.", icon: Code2 },
  { label: "Improve customer operations", value: "support", description: "Customer support, launch operations and systems.", icon: Headset },
];

const stageChoices: Choice[] = [
  { label: "I'm still shaping the idea", value: "idea", description: "The opportunity is still taking form." },
  { label: "I'm building or testing", value: "building", description: "Something is being developed or tested." },
  { label: "I'm preparing to launch", value: "launching", description: "The next milestone is going to market." },
  { label: "I've launched and have early traction", value: "traction", description: "There are users or customers, but growth is uneven." },
  { label: "I'm running an established business", value: "established", description: "The focus is improving or expanding what exists." },
];

const needChoices: Record<Goal, Choice[]> = {
  validate: [
    { label: "Find out whether the problem matters", value: "problem", description: "Understand the customer need before building." },
    { label: "Identify the right audience", value: "audience", description: "Know who is most likely to care or pay." },
    { label: "Test a solution or proposition", value: "proposition", description: "Gather evidence on the offer and experience." },
    { label: "Decide what to do next", value: "direction", description: "Reduce uncertainty and prioritise the next move." },
  ],
  strategy: [
    { label: "Clarify our positioning", value: "positioning", description: "Make the value and differentiation easier to understand." },
    { label: "Choose a market and audience", value: "market", description: "Focus effort where the opportunity is strongest." },
    { label: "Plan a launch or market entry", value: "launch", description: "Coordinate the route to market." },
    { label: "Set priorities for the next 90 days", value: "priorities", description: "Turn ambition into an actionable roadmap." },
  ],
  growth: [
    { label: "Acquire our first customers", value: "first-customers", description: "Find the right people and learn what converts." },
    { label: "Build a repeatable acquisition system", value: "acquisition", description: "Move beyond occasional campaigns." },
    { label: "Improve conversion and retention", value: "conversion", description: "Get more value from the people already reached." },
    { label: "Expand marketing across channels", value: "channels", description: "Build a more consistent growth operation." },
  ],
  brand: [
    { label: "Create or refresh our brand identity", value: "identity", description: "Build a recognisable and consistent visual system." },
    { label: "Clarify how we position and communicate", value: "positioning", description: "Make the promise, audience and message clear." },
    { label: "Improve our website and content", value: "website-copy", description: "Explain the offer and make the next step easier." },
    { label: "Show up consistently on social media", value: "social", description: "Build a more reliable content presence." },
  ],
  technology: [
    { label: "Build a website or e-commerce experience", value: "website", description: "Give customers a clear way to discover or buy." },
    { label: "Build an app or digital product", value: "product", description: "Turn a product idea into a working experience." },
    { label: "Improve an existing platform", value: "platform", description: "Extend, stabilise or modernise what is already live." },
    { label: "Automate a workflow or explore AI", value: "automation", description: "Make a process more useful, efficient or intelligent." },
  ],
  support: [
    { label: "Set up customer support properly", value: "setup", description: "Create a reliable support foundation." },
    { label: "Handle ongoing customer conversations", value: "ongoing", description: "Add consistent customer support capacity." },
    { label: "Coordinate a launch or campaign", value: "operations", description: "Keep the moving parts and people aligned." },
    { label: "Understand leads and performance better", value: "analytics", description: "Improve tracking, reporting and decision-making." },
  ],
};

const catalogue = {
  validate: {
    name: "Validate Sprint",
    price: "₦250,000",
    cadence: "One-off engagement",
    timeline: "10–15 working days",
    description: "Customer and audience discovery, proposition testing, outreach to up to 25 qualified product-trial participants, feedback synthesis and recommended next steps.",
    href: "/services/validate",
    tag: "Best starting point",
  },
  growthStrategy: {
    name: "Growth Strategy Sprint",
    price: "₦250,000",
    cadence: "One-off engagement",
    timeline: "10 working days",
    description: "Audience definition, positioning, value proposition, messaging, channel recommendations and a 90-day growth roadmap.",
    href: "/services/strategy",
  },
  goToMarket: {
    name: "Go-to-Market Strategy",
    price: "₦450,000",
    cadence: "One-off engagement",
    timeline: "15–20 working days",
    description: "Market and competitor analysis, launch positioning, channel mix, campaign plan, budget and measurement framework.",
    href: "/services/strategy",
    tag: "For launches",
  },
  launch: {
    name: "Launch",
    price: "₦350,000",
    cadence: "Per month",
    timeline: "Three-month initial term",
    description: "A focused monthly growth programme for one product, one audience and up to two channels, with acquisition experiments, feedback and performance reviews.",
    href: "/services/marketing",
    tag: "Monthly growth",
  },
  growth: {
    name: "Growth",
    price: "₦650,000",
    cadence: "Per month",
    timeline: "Three-month initial term",
    description: "A broader programme for up to two audience segments and three channels, with acquisition, conversion and retention initiatives.",
    href: "/services/marketing",
    tag: "For existing traction",
  },
  brandStarter: {
    name: "Brand identity starter kit",
    price: "₦250,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "A focused brand identity foundation for a startup that needs a coherent and usable visual presence.",
    href: "/services/specialist",
  },
  brandSystem: {
    name: "Full brand identity system",
    price: "₦350,000–₦500,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "A more complete identity system for a business that needs a consistent brand across multiple touchpoints.",
    href: "/services/specialist",
  },
  socialLite: {
    name: "Social Media Lite",
    price: "₦50,000",
    cadence: "Per month",
    timeline: "One platform · up to 8 client-supplied items",
    description: "Scheduling and publishing only. Content is supplied by the client; creative production and community management are not included.",
    href: "/services/specialist",
  },
  socialOne: {
    name: "Full social media management",
    price: "₦120,000",
    cadence: "Per month",
    timeline: "One platform",
    description: "Ongoing channel management, content coordination, publishing, community monitoring and reporting.",
    href: "/services/specialist",
  },
  socialTwo: {
    name: "Full social media management",
    price: "₦180,000",
    cadence: "Per month",
    timeline: "Two platforms",
    description: "Ongoing management across two platforms, with content coordination, publishing, community monitoring and reporting.",
    href: "/services/specialist",
  },
  paidSetup: {
    name: "Paid ads setup",
    price: "₦100,000",
    cadence: "One-off engagement",
    timeline: "One platform",
    description: "Campaign and account structure, audience setup and a measurement-ready foundation. Advertising spend is separate.",
    href: "/services/specialist",
  },
  paidOne: {
    name: "Paid ads management",
    price: "₦150,000",
    cadence: "Per month",
    timeline: "One platform",
    description: "Campaign monitoring, audience and creative testing, budget pacing, optimisation and reporting. Advertising spend is separate.",
    href: "/services/specialist",
  },
  paidTwo: {
    name: "Paid ads management",
    price: "₦250,000",
    cadence: "Per month",
    timeline: "Two platforms",
    description: "Campaign management and optimisation across two platforms. Advertising spend is separate.",
    href: "/services/specialist",
  },
  copy: {
    name: "Website copy (up to 5 pages)",
    price: "₦150,000–₦250,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "Clear website messaging and page copy for up to five pages.",
    href: "/services/specialist",
  },
  graphics: {
    name: "10 social graphics",
    price: "₦60,000",
    cadence: "One-off engagement",
    timeline: "Defined content brief",
    description: "A defined batch of ten social media graphics.",
    href: "/services/specialist",
  },
  contentCalendar: {
    name: "Content calendar",
    price: "₦50,000",
    cadence: "One-off engagement",
    timeline: "Monthly or campaign plan",
    description: "A practical content calendar aligned to your audience, message and channel.",
    href: "/services/specialist",
  },
  competitorResearch: {
    name: "Competitor research / audit",
    price: "₦100,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "A review of competitors, alternatives, positioning and visible market activity.",
    href: "/services/specialist",
  },
  customerResearch: {
    name: "Customer research sprint",
    price: "₦250,000–₦350,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "Customer interviews or surveys, research synthesis and prioritised recommendations.",
    href: "/services/specialist",
  },
  supportPlaybook: {
    name: "Customer support playbook & FAQ setup",
    price: "₦150,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "Support workflows, response guidance, escalation paths and help content.",
    href: "/services/support",
  },
  ongoingSupport: {
    name: "Ongoing customer support",
    price: "From ₦180,000",
    cadence: "Per month",
    timeline: "Coverage agreed in scope",
    description: "Ongoing customer conversations, support workflows and recurring issue insights.",
    href: "/services/support",
  },
  launchOps: {
    name: "Launch / campaign operations",
    price: "₦250,000–₦450,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "Launch planning, coordination, execution tracking and post-launch review.",
    href: "/services/specialist",
  },
  analytics: {
    name: "Marketing analytics / tracking setup",
    price: "₦120,000–₦200,000",
    cadence: "One-off engagement",
    timeline: "Scoped at kickoff",
    description: "Conversion event planning, campaign tagging, tracking and reporting setup.",
    href: "/services/specialist",
  },
  technology: {
    name: "Technology & product engagement",
    price: "Custom scope",
    cadence: "Project-based",
    timeline: "After technical discovery",
    description: "Websites, e-commerce platforms, software products, integrations and AI-enabled workflows. Scope and price depend on the product, complexity and delivery needs.",
    href: "/services/technology",
  },
} satisfies Record<string, Offer>;

function makeRecommendation(context: AdvisorContext): Recommendation {
  const note = context.notes.join(" ").toLowerCase();
  const goal = context.goal ?? "growth";
  const stage = context.stage ?? "idea";
  const need = context.need ?? "";
  let offers: Offer[] = [];
  let title = "Start with the decision that matters most.";
  let intro = "You do not need to solve every part of the business at once. Start with the uncertainty or bottleneck that will make the next decision easier.";
  let why = "A focused first step helps you learn before committing time and money to a larger programme.";
  let practicalTitle = "A useful exercise to do before spending";
  let practicalSteps = ["Write down the outcome you want in one sentence.", "List the assumptions that must be true for that outcome to happen.", "Speak to a few customers or users before deciding what to build or buy."];

  if (goal === "validate") {
    offers = [catalogue.validate];
    title = "Get evidence before making the bigger bet.";
    intro = "The most useful next move is to test the riskiest assumption, not to rush into a full launch or build.";
    why = "A Validate Sprint gives you a structured way to understand the audience, test the proposition and gather feedback before you make the next investment.";
    practicalTitle = "A useful validation exercise you can do yourself";
    practicalSteps = ["Speak to five people who experience the problem.", "Ask how they solve it today, what that costs them and what frustrates them most.", "Listen for repeated behaviour and existing workarounds. Avoid pitching your solution too early."];
    if (need === "audience") offers.push(catalogue.customerResearch);
    if (need === "direction") offers.push(catalogue.growthStrategy);
  } else if (goal === "strategy") {
    const launch = need === "launch" || stage === "launching" || /launch|market entry|new market/.test(note);
    offers = [launch ? catalogue.goToMarket : catalogue.growthStrategy];
    title = launch ? "Give the launch a deliberate route to market." : "Turn scattered ideas into a focused direction.";
    intro = launch
      ? "A launch needs more than a date and a campaign. It needs a defined audience, a clear promise, channel choices and a coordinated sequence."
      : "Bring the audience, proposition and priorities into one practical plan that your team can act on.";
    why = launch
      ? "The Go-to-Market Strategy is designed to connect market context, positioning, channels, launch activity and measurement."
      : "The Growth Strategy Sprint gives you audience focus, positioning, messaging, channel direction and a 90-day roadmap.";
    practicalTitle = "A useful strategy exercise";
    practicalSteps = ["Complete this sentence: We help [specific audience] solve [specific problem] by [distinctive value].", "List the alternatives customers use today, including doing nothing.", "Choose one customer segment and one measurable outcome to prioritise for the next 90 days."];
  } else if (goal === "growth") {
    if (/social|instagram|facebook|content calendar/.test(note)) {
      offers = [catalogue.socialLite, catalogue.contentCalendar, catalogue.socialOne];
      title = "Build a social presence you can sustain.";
      intro = "Choose the right level of support for the content and capacity you already have. A publishing-only arrangement is different from full channel management.";
      why = "Social Media Lite is available when you supply the content; full management includes content coordination and community activity.";
      practicalTitle = "A useful social media exercise";
      practicalSteps = ["Choose one audience and one purpose for the channel.", "Review recent posts and identify which ones prompted meaningful replies, enquiries or visits.", "Build the next two weeks around useful, repeatable themes rather than posting for volume."];
    } else if (stage === "idea" || stage === "building") {
      offers = [catalogue.validate, catalogue.growthStrategy];
      title = "Build the growth foundation before increasing spend.";
      intro = "Before committing to a recurring acquisition programme, make sure the audience, problem and proposition are clear enough to test.";
      why = "Validation and a focused growth plan reduce guesswork and give later marketing activity a stronger starting point.";
      practicalTitle = "A useful growth exercise";
      practicalSteps = ["Describe the one kind of customer you most need to reach.", "Write down what you want them to do after discovering you.", "Identify the biggest unknown between discovery and that action."];
    } else {
      offers = [stage === "traction" || stage === "established" || need === "conversion" || need === "channels" ? catalogue.growth : catalogue.launch];
      title = stage === "traction" || stage === "established" ? "Turn existing momentum into a stronger growth system." : "Build a consistent path to your first customers.";
      intro = "The next step is to make customer acquisition more deliberate: a clear monthly plan, focused experiments and a regular review of what is working.";
      why = offers[0] === catalogue.growth
        ? "The Growth programme is designed for products with early traction that need coordinated acquisition, conversion and retention work."
        : "The Launch programme gives an early-stage product a focused operating rhythm across one audience and up to two channels.";
      practicalTitle = "A useful growth exercise";
      practicalSteps = ["Map the journey from first discovery to first meaningful customer action.", "Find the step where the most people drop off.", "Run one small experiment against that bottleneck before increasing channel spend."];
    }
  } else if (goal === "brand") {
    if (need === "social" || /social|instagram|facebook|content calendar/.test(note)) {
      offers = [catalogue.socialLite, catalogue.contentCalendar, catalogue.socialOne];
      title = "Make your brand show up consistently.";
      intro = "Choose the level of channel support that matches the work you already have ready. Publishing support and full channel management are different scopes.";
      why = "Social Media Lite is a lower-cost publishing option when you supply content. Full management adds ongoing content coordination and community activity.";
      practicalTitle = "A useful brand exercise";
      practicalSteps = ["Choose three words you want customers to associate with the business.", "Review your last ten posts and note whether they consistently support those words.", "Make sure the next action is obvious on your profile and website."];
    } else if (need === "website-copy" || /website|copy|landing page/.test(note)) {
      offers = [catalogue.copy, catalogue.growthStrategy];
      title = "Make the value of your business easier to understand.";
      intro = "Strong brand communication starts with a clear promise and carries that message consistently through the website and customer touchpoints.";
      why = "Website copy creates the words customers need to understand the offer; strategy helps make sure those words are grounded in a clear position.";
      practicalTitle = "A useful messaging exercise";
      practicalSteps = ["Ask three customers to explain what they think you offer after looking at your homepage.", "Compare their description with the message you intended.", "Rewrite the opening sentence around the customer's problem and the outcome you deliver."];
    } else {
      offers = [need === "positioning" ? catalogue.growthStrategy : catalogue.brandStarter, catalogue.brandSystem];
      title = "Build a brand people can recognise and understand.";
      intro = "The work should connect how the business is positioned with how it looks and communicates, rather than treating a logo as the whole brand.";
      why = need === "positioning"
        ? "Start by clarifying the value proposition and audience, then translate that direction into a coherent identity."
        : "The starter kit is suited to a focused identity foundation. The full system is for businesses that need a more complete set of brand rules and assets.";
      practicalTitle = "A useful brand exercise";
      practicalSteps = ["Write a short description of the customer you want to attract.", "Identify what makes your offer meaningfully different from the alternatives.", "Collect examples of brands whose clarity and consistency you admire, and note why they work."];
    }
  } else if (goal === "technology") {
    offers = [catalogue.technology];
    title = "Define the right product before choosing the build.";
    intro = "Technology should support a real user journey and business outcome. Start by making the job the product needs to do clear.";
    why = "A technical discovery and scoped proposal can help establish the right approach, delivery phases and investment before implementation begins.";
    practicalTitle = "A useful product-planning exercise";
    practicalSteps = ["Describe the primary user and the one task they must be able to complete.", "Map the steps from entry to successful completion.", "Separate must-have launch capabilities from improvements that can wait until real usage provides evidence."];
  } else if (goal === "support") {
    if (need === "analytics") {
      offers = [catalogue.analytics];
      title = "Make performance easier to see and act on.";
      intro = "Start by deciding which customer or business actions you need to measure, then build tracking around those decisions.";
      why = "An analytics setup connects conversion events, campaign activity and reporting so your team can make better-informed choices.";
      practicalTitle = "A useful measurement exercise";
      practicalSteps = ["List the three actions that matter most to the business.", "Identify where each action happens and what evidence is available today.", "Agree how often the numbers should be reviewed and who owns each follow-up."];
    } else if (need === "operations" || /launch|campaign/.test(note)) {
      offers = [catalogue.launchOps];
      title = "Bring the moving parts of the launch together.";
      intro = "A launch is easier to execute when owners, dependencies, assets and decision points are visible to everyone involved.";
      why = "Launch and campaign operations provide a coordinated plan, activity tracking and a post-launch review.";
      practicalTitle = "A useful launch exercise";
      practicalSteps = ["Work backwards from the launch date and list every dependency.", "Assign one accountable owner to each critical activity.", "Identify what must be ready before launch and what can be improved afterwards."];
    } else {
      offers = need === "ongoing" ? [catalogue.ongoingSupport, catalogue.supportPlaybook] : [catalogue.supportPlaybook, catalogue.ongoingSupport];
      title = "Make the customer experience more dependable.";
      intro = "Good support is more than answering messages. It needs clear ownership, consistent responses, useful help content and a way to learn from recurring issues.";
      why = "The playbook establishes the operating foundation; ongoing support adds recurring capacity once the volume and coverage are understood.";
      practicalTitle = "A useful support exercise";
      practicalSteps = ["Review the last 20 customer questions or complaints.", "Group repeated issues and identify what information customers could not find.", "Create a simple response guide and nominate an owner for unresolved issues."];
    }
  }

  if (note.includes("paid ads") || note.includes("advert") || note.includes("facebook ads") || note.includes("google ads")) {
    offers = /two platforms|two channels|multiple platforms/.test(note)
      ? [catalogue.paidSetup, catalogue.paidTwo]
      : [catalogue.paidSetup, catalogue.paidOne];
    title = "Make paid acquisition measurable before scaling it.";
    intro = "Paid campaigns work best when the audience, offer and conversion event are clear. Set up measurement before increasing the budget.";
    why = "The published setup and management rates cover BuildGenie's service fees; advertising spend is separate.";
    practicalTitle = "A useful paid media exercise";
    practicalSteps = ["Define the one action a campaign should drive.", "Check that the landing page and conversion event work before launch.", "Set a small test budget and agree what evidence would justify scaling."];
  } else if (note.includes("two platforms") || note.includes("two channels") || note.includes("multiple platforms")) {
    if (goal === "brand" || note.includes("social")) offers = [catalogue.socialTwo];
    else if (note.includes("paid") || note.includes("ads")) offers = [catalogue.paidTwo];
  }

  return { title, intro, why, offers: offers.slice(0, 3), practicalTitle, practicalSteps };
}

function inferGoal(text: string): Goal | undefined {
  const value = text.toLowerCase();
  if (/brand|logo|identity|rebrand|visual|design system/.test(value)) return "brand";
  if (/app|website|e-?commerce|software|platform|product build|develop|engineering|automation|integrat|ai tool/.test(value)) return "technology";
  if (/support|customer service|help desk|ticket|faq|customer experience/.test(value)) return "support";
  if (/validat|test an idea|idea validation|problem discovery|market fit|customer research/.test(value)) return "validate";
  if (/strategy|position|go.to.market|market entry|launch plan|business direction/.test(value)) return "strategy";
  if (/market|growth|customer|acqui|sales|advert|campaign|social|content|first users|retention/.test(value)) return "growth";
  return undefined;
}

function inferStage(text: string): Stage | undefined {
  const value = text.toLowerCase();
  if (/\b(established|running a business|been in business|operating for|existing business)\b/.test(value)) return "established";
  if (/\b(traction|launched|already live|existing customers|have customers|paying customers)\b/.test(value)) return "traction";
  if (/\b(launching|launch soon|launching soon|preparing to launch|about to launch|ready to launch)\b/.test(value)) return "launching";
  if (/\b(building|developing|testing|prototype|mvp)\b/.test(value)) return "building";
  if (/\b(idea|concept|just starting|early stage|not started|haven't started)\b/.test(value)) return "idea";
  return undefined;
}

function inferNeed(goal: Goal, text: string): string {
  const value = text.toLowerCase();
  const patterns: Partial<Record<Goal, [RegExp, string][]>> = {
    validate: [[/\b(audience|early adopters)\b/, "audience"], [/\b(next step|what to do next)\b/, "direction"]],
    strategy: [[/\b(positioning|position)\b/, "positioning"], [/\b(launch|market entry)\b/, "launch"]],
    growth: [[/\b(conversion|retention|drop.?off)\b/, "conversion"], [/\b(channels|multiple platforms)\b/, "channels"]],
    brand: [[/\b(social|instagram|facebook)\b/, "social"], [/\b(website|copy|landing page)\b/, "website-copy"], [/\b(positioning|position)\b/, "positioning"]],
    support: [[/\b(analytics|tracking|reporting)\b/, "analytics"], [/\b(launch|campaign)\b/, "operations"], [/\b(ongoing|conversations|inquiries|enquiries)\b/, "ongoing"]],
  };
  return patterns[goal]?.find(([pattern]) => pattern.test(value))?.[1] ?? text;
}

function welcomeMessage(): ChatMessage {
  return {
    id: makeId(),
    role: "assistant",
    text: "Hi! Let's work through this together. What are you trying to build, solve or improve? You can describe it in your own words or choose a starting point below.",
    choices: goalChoices,
    action: "goal",
  };
}

function stageQuestion(goal: Goal) {
  const subjects: Record<Goal, string> = {
    validate: "the idea",
    strategy: "the business direction",
    growth: "marketing and growth",
    brand: "the brand",
    technology: "the product or technology",
    support: "customer and business operations",
  };
  return `Got it. Let's put that in context. Where are you with ${subjects[goal]} right now?`;
}

function needQuestion(goal: Goal) {
  const prompts: Record<Goal, string> = {
    validate: "What is the biggest unknown you need to resolve?",
    strategy: "Which decision would make the biggest difference right now?",
    growth: "What would you most like your growth effort to improve?",
    brand: "Which part of your brand needs the most attention?",
    technology: "What do you need the technology to make possible?",
    support: "Which part of the operation would you like to improve first?",
  };
  return prompts[goal];
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ProjectAdvisor({ initialService, initialSelection }: { initialService: string; initialSelection: string }) {
  const [context, setContext] = useState<AdvisorContext>({ notes: [] });
  const [messages, setMessages] = useState<ChatMessage[]>(() => initialService ? [{
    id: makeId(),
    role: "assistant",
    text: initialSelection
      ? `You're interested in ${initialSelection} from ${initialService}. We can discuss this with you, or you can tell me more and explore your options.`
      : `You've chosen ${initialService} as a starting point. We can discuss this with you, or you can tell me more and explore your options.`,
    startingPoint: initialSelection || initialService,
    choices: goalChoices,
    action: "goal",
  }] : [welcomeMessage()]);
  const [draft, setDraft] = useState("");
  const [plan, setPlan] = useState<Recommendation | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [requestedItem, setRequestedItem] = useState("");
  const [requestMailto, setRequestMailto] = useState("");

  function startRequest(item: string, recommendation: Recommendation | null) {
    setRequestedItem(item);
    setPlan(recommendation);
    setShowConfirmation(false);
    setRequestMailto("");
    setShowLeadForm(true);
    trackEvent("advisor_work_with_us_click", {
      has_recommendation: Boolean(recommendation),
    });
  }
  function chooseGoal(value: string, label: string) {
    const goal = value as Goal;
    trackEvent("advisor_goal_selected", { goal });
    setContext((current) => ({ ...current, goal }));
    setPlan(null);
    setMessages((current) => [
      ...current,
      { id: makeId(), role: "user", text: label },
      {
        id: makeId(),
        role: "assistant",
        text: stageQuestion(goal),
        choices: stageChoices,
        action: "stage",
      },
    ]);
  }

  function chooseStage(value: string, label: string) {
    const stage = value as Stage;
    const updated = { ...context, stage };
    setContext(updated);
    setMessages((current) => [
      ...current,
      { id: makeId(), role: "user", text: label },
      {
        id: makeId(),
        role: "assistant",
        text: needQuestion(updated.goal ?? "growth"),
        choices: needChoices[updated.goal ?? "growth"],
        action: "need",
      },
    ]);
  }

  function chooseNeed(value: string, label: string) {
    const updated = { ...context, need: value };
    const recommendation = makeRecommendation(updated);
    trackEvent("advisor_recommendation_generated", {
      goal: updated.goal ?? "unspecified",
      stage: updated.stage ?? "unspecified",
      need: updated.need ?? "unspecified",
      offer_count: recommendation.offers.length,
    });
    setContext(updated);
    setPlan(recommendation);
    setMessages((current) => [
      ...current,
      { id: makeId(), role: "user", text: label },
      {
        id: makeId(),
        role: "assistant",
        text: "Based on what you've shared, here's the direction I'd explore first. Treat it as a useful starting point, not a fixed prescription. You can keep thinking this through or ask me to look at another angle.",
        recommendation,
      },
    ]);
  }

  function handleChoice(action: ChoiceAction, choice: Choice) {
    if (action === "goal") chooseGoal(choice.value, choice.label);
    if (action === "stage") chooseStage(choice.value, choice.label);
    if (action === "need") chooseNeed(choice.value, choice.label);
  }

  function handleSend(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    const userMessage: ChatMessage = { id: makeId(), role: "user", text };
    trackEvent("advisor_message_sent", { message_length: Math.min(text.length, 2000) });

    if (!context.goal) {
      const detected = inferGoal(text);
      if (detected) {
        setContext((current) => ({ ...current, goal: detected, notes: [...current.notes, text] }));
        setPlan(null);
        setMessages((current) => [
          ...current,
          userMessage,
          { id: makeId(), role: "assistant", text: stageQuestion(detected), choices: stageChoices, action: "stage" },
        ]);
      } else {
        setContext((current) => ({ ...current, notes: [...current.notes, text] }));
        setMessages((current) => [
          ...current,
          userMessage,
          {
            id: makeId(),
            role: "assistant",
            text: "There's a useful starting point in that. Which of these areas feels closest to the challenge? You can also keep describing it in your own words.",
            choices: goalChoices,
            action: "goal",
          },
        ]);
      }
      return;
    }

    const goal = context.goal;
    const updated = { ...context, notes: [...context.notes, text] };
    if (!updated.stage) {
      const stage = inferStage(text);
      if (stage) {
        setContext({ ...updated, stage });
        setMessages((current) => [
          ...current,
          userMessage,
          { id: makeId(), role: "assistant", text: needQuestion(goal), choices: needChoices[goal], action: "need" },
        ]);
        return;
      }
      setContext(updated);
      setMessages((current) => [
        ...current,
        userMessage,
        { id: makeId(), role: "assistant", text: "I'm not sure where you are in the journey yet. Are you shaping an idea, building, launching or already operating? You can also choose below.", choices: stageChoices, action: "stage" },
      ]);
      return;
    }
    if (!updated.need) {
      const withNeed = { ...updated, need: inferNeed(goal, text) };
      const recommendation = makeRecommendation(withNeed);
      setContext(withNeed);
      setPlan(recommendation);
      setMessages((current) => [
        ...current,
        userMessage,
        { id: makeId(), role: "assistant", text: "Thanks for sharing that. Based on the area and stage you've described, here's a starting point to consider.", recommendation },
      ]);
      return;
    }
    setContext(updated);
    const recommendation = makeRecommendation(updated);
    setPlan(recommendation);
    setMessages((current) => [
      ...current,
      userMessage,
      {
        id: makeId(),
        role: "assistant",
        text: "Thanks for adding that context. Here's a starting direction based on what you've shared so far.",
        recommendation,
      },
    ]);
  }

  function restart() {
    setContext({ notes: [] });
    setPlan(null);
    setShowLeadForm(false);
    setShowConfirmation(false);
    setRequestedItem("");
    setDraft("");
    setMessages([welcomeMessage()]);
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const conversation = messages.map((message) => {
      const speaker = message.role === "user" ? "VISITOR" : "BUILDGENIE ADVISOR";
      const sections = [`${speaker}: ${message.text}`];
      if (message.startingPoint) sections.push(`Selected starting point: ${message.startingPoint}`);
      if (message.recommendation) {
        sections.push(
          `Recommendation: ${message.recommendation.title}`,
          message.recommendation.offers.map((offer) =>
            `- ${offer.name}: ${offer.price} (${offer.cadence}; ${offer.timeline})`
          ).join("\n"),
          `Why: ${message.recommendation.why}`,
          `Practical next steps:\n${message.recommendation.practicalSteps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`
        );
      }
      return sections.join("\n");
    }).join("\n\n");

    const currentRecommendation = plan
      ? [
          plan.title,
          ...plan.offers.map((offer) => `- ${offer.name}: ${offer.price} (${offer.cadence}; ${offer.timeline})`),
          `Why: ${plan.why}`,
          `Practical next steps:\n${plan.practicalSteps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`,
        ].join("\n")
      : "No structured recommendation selected yet.";

    const body = [
      "BUILDGENIE LABS: PROJECT ADVISOR ENQUIRY",
      "",
      `Name: ${leadName}`,
      `Email: ${leadEmail}`,
      `Interested in: ${requestedItem || "Initial project conversation"}`,
      "",
      "CONVERSATION",
      conversation,
      "",
      "CURRENT RECOMMENDATION",
      currentRecommendation,
      "",
      "Prepared on the BuildGenie Labs website. This email is not sent until you review and press Send.",
    ].join("\n").slice(0, 12000);

    const subject = `Project enquiry: ${leadName}`;
    const mailto = `mailto:hello@buildgenielabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setRequestMailto(mailto);
    setShowConfirmation(true);
    trackEvent("advisor_request_email_prepared", {
      has_recommendation: Boolean(plan),
    });
    window.location.href = mailto;
  }

  function onComposerKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  return (
    <section className="advisor-section">
      <div className="container advisor-layout">
        <div className="advisor-intro">
          <div className="eyebrow"><span className="eyebrow-line" />A BETTER WAY TO START</div>
          <h1>Let&apos;s work out<br /><span>what comes next.</span></h1>
          <p className="advisor-intro-copy">
            You don&apos;t need a perfect brief or even a clear idea of what you need.
            Think aloud, explore possibilities and get a practical direction
            grounded in what BuildGenie actually does.
          </p>
        </div>

        <div className="advisor-workspace">
          <div className="advisor-chat-body" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`advisor-message advisor-message-${message.role}`} key={message.id}>
                {message.role === "assistant" && <span className="advisor-avatar"><Sparkles size={14} /></span>}
                <div className="advisor-message-content">
                  <div className="advisor-message-label">{message.role === "user" ? "YOU" : "BUILDGENIE ADVISOR"}</div>
                  <p>{message.text}</p>
                  {message.startingPoint && (
                    <div className="advisor-starting-point">
                      <span>YOUR SELECTED STARTING POINT</span>
                      <strong>{message.startingPoint}</strong>
                      <button className="button button-orange" type="button" onClick={() => startRequest(message.startingPoint!, null)}>
                        Work with us <ArrowUpRight size={17} />
                      </button>
                    </div>
                  )}
                  {message.choices && index === messages.length - 1 && (
                    <div className={`advisor-choice-grid ${message.action === "goal" ? "advisor-choice-goals" : ""}`}>
                      {message.choices.map((choice) => {
                        const Icon = (choice as Choice & { icon?: LucideIcon }).icon;
                        return (
                          <button type="button" className="advisor-choice" key={choice.value} onClick={() => handleChoice(message.action!, choice)}>
                            {Icon && <span className="advisor-choice-icon"><Icon size={17} /></span>}
                            <span><strong>{choice.label}</strong>{choice.description && <small>{choice.description}</small>}</span>
                            <ChevronRight size={15} />
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {message.recommendation && <RecommendationCard recommendation={message.recommendation} onWorkWithUs={startRequest} />}
                </div>
              </div>
            ))}
          </div>

          <form className="advisor-composer" onSubmit={handleSend}>
            <label className="sr-only" htmlFor="advisor-message">Write your thoughts or ask a question</label>
            <textarea
              id="advisor-message"
              rows={2}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={onComposerKeyDown}
              placeholder="What are you trying to build, solve or improve?"
            />
            <div className="advisor-composer-bottom">
              <span>Press Enter to send · Shift + Enter for a new line</span>
              <button className="advisor-send-button" type="submit" aria-label="Send message" disabled={!draft.trim()}><ArrowRight size={18} /></button>
            </div>
          </form>

          <div className="advisor-workspace-footer">
            <span><ShieldCheck size={13} /> Your thinking stays in this browser until you choose to reach us.</span>
            <button type="button" onClick={restart}>Start over</button>
          </div>
        </div>

        <div className="advisor-details">
          <div className="advisor-promise-list">
            <div><span><Lightbulb size={18} /></span><p><strong>Space to think</strong>Bring an early idea, a business problem or a question you&apos;re still figuring out.</p></div>
            <div><span><Compass size={18} /></span><p><strong>Useful direction</strong>Get practical next steps and relevant options, even if you decide to do the work yourself.</p></div>
            <div><span><ShieldCheck size={18} /></span><p><strong>Clear and transparent</strong>Recommendations use our published services and guide prices. No pressure to buy.</p></div>
          </div>
          <div className="advisor-capability-note">
            <span>ONE CONNECTED TEAM</span>
            <div><i>STRATEGY</i><b>·</b><i>GROWTH</i><b>·</b><i>TECHNOLOGY</i><b>·</b><i>EXECUTION</i></div>
          </div>
          <a className="advisor-email-link" href="mailto:hello@buildgenielabs.com">Prefer email? hello@buildgenielabs.com <ArrowUpRight size={15} /></a>
        </div>
      </div>

      {showLeadForm && (
        <div className="advisor-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowLeadForm(false); }}>
          <div className="advisor-lead-modal" role="dialog" aria-modal="true" aria-labelledby="advisor-lead-title">
            <button type="button" className="advisor-modal-close" onClick={() => setShowLeadForm(false)} aria-label="Close"><X size={19} /></button>
            {showConfirmation ? (
              <div role="status">
                <div className="advisor-modal-icon"><CheckCircle2 size={20} /></div>
                <div className="eyebrow"><span className="eyebrow-line" />NEXT STEPS</div>
                <h2 id="advisor-lead-title">Thank you, {leadName}.</h2>
                <p>Your email app should open with your details, conversation and recommendation ready to review. Nothing is sent until you press Send.</p>
                <a className="button button-orange" href={requestMailto || "mailto:hello@buildgenielabs.com"}>Open prepared email <ArrowUpRight size={17} /></a>
                <p className="advisor-handoff-note">Your conversation is not stored on our servers by this version of the advisor.</p>
              </div>
            ) : (
              <>
                <div className="advisor-modal-icon"><Mail size={20} /></div>
                <div className="eyebrow"><span className="eyebrow-line" />LET&apos;S TAKE THE NEXT STEP</div>
                <h2 id="advisor-lead-title">Work with us.</h2>
                <p>Add your name and email. We&apos;ll prepare an email with your conversation, selected engagement and any recommendation so you do not have to start over.</p>
                <form onSubmit={submitRequest}>
                  <label>Your name<input value={leadName} onChange={(event) => setLeadName(event.target.value)} required autoComplete="name" placeholder="Full name" /></label>
                  <label>Email address<input type="email" value={leadEmail} onChange={(event) => setLeadEmail(event.target.value)} required autoComplete="email" placeholder="you@company.com" /></label>
                  <button className="button button-orange" type="submit">Prepare request email <ArrowUpRight size={17} /></button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function RecommendationCard({ recommendation, onWorkWithUs }: { recommendation: Recommendation; onWorkWithUs: (item: string, recommendation: Recommendation) => void }) {
  return (
    <div className="advisor-recommendation">
      <div className="advisor-recommendation-heading">
        <span><Sparkles size={15} /> YOUR STARTING DIRECTION</span>
        <b>BASED ON YOUR CONTEXT</b>
      </div>
      <h3>{recommendation.title}</h3>
      <p className="advisor-recommendation-intro">{recommendation.intro}</p>
      <div className="advisor-recommendation-why"><Lightbulb size={17} /><p>{recommendation.why}</p></div>
      <div className="advisor-offer-heading"><span>RELEVANT BUILDGENIE ENGAGEMENTS</span><small>Published guide pricing · NGN</small></div>
      <div className="advisor-offer-list">
        {recommendation.offers.map((offer, index) => (
          <article className="advisor-offer" key={offer.name + offer.price + index}>
            <div className="advisor-offer-top"><span>{offer.tag ?? (index === 0 ? "RECOMMENDED START" : "ALSO CONSIDER")}</span><span>{offer.timeline}</span></div>
            <div className="advisor-offer-main">
              <div><h4>{offer.name}</h4><p>{offer.description}</p></div>
              <div className="advisor-offer-price"><strong>{offer.price}</strong><small>{offer.cadence}</small></div>
            </div>
            <div className="advisor-offer-actions">
              <a href={offer.href}>View engagement <ArrowUpRight size={14} /></a>
              <button type="button" onClick={() => onWorkWithUs(offer.name, recommendation)}>Work with us <ArrowUpRight size={14} /></button>
            </div>
          </article>
        ))}
      </div>
      <div className="advisor-practical">
        <div><span><CheckCircle2 size={16} /></span><strong>{recommendation.practicalTitle}</strong></div>
        <ol>{recommendation.practicalSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        <p>You can start with these steps yourself. No engagement is required.</p>
      </div>
    </div>
  );
}
