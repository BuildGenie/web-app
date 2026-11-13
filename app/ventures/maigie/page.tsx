import type { Metadata } from "next";
import { VentureDetailPage, type VentureDetail } from "@/components/venture-detail-page";

export const metadata: Metadata = {
  title: "Maigie | An Intelligent Learning Environment",
  description: "Discover Maigie, a BuildGenie venture creating an intelligent learning environment that keeps learning moving across questions, preparation, practice and reflection.",
  alternates: { canonical: "/ventures/maigie" },
  openGraph: {
    type: "website",
    title: "Maigie | A BuildGenie Venture",
    description: "Learning should happen, not be managed. Meet Maigie, an intelligent learning environment.",
    url: "/ventures/maigie",
  },
};

const venture: VentureDetail = {
  number: "01",
  category: "LEARNING TECHNOLOGY",
  name: "Maigie",
  headline: "Learning should happen, not be managed.",
  summary: "Maigie is an intelligent learning environment designed to keep learning moving — carrying context across the questions, preparation, practice and reflection that make understanding stick.",
  thesisEyebrow: "THE IDEA BEHIND MAIGIE",
  thesisTitle: "Learning is a continuous experience. The tools around it should understand that.",
  thesis: [
    "Learning rarely happens in one place or in one sitting. It moves between curiosity, explanation, preparation, practice and the moment a learner realises something has finally clicked.",
    "Maigie is being shaped around that continuity. Instead of treating every question or study session as a disconnected interaction, it aims to carry useful context forward so learners can spend less energy organising the process and more energy actually learning.",
    "The product brings learners and educators into an environment where personal learning and shared learning can sit alongside one another. Its direction is captured in one simple belief: learning should happen, not be managed."
  ],
  focusEyebrow: "THE LEARNING EXPERIENCE",
  focusTitle: "Keep the important context connected.",
  focusIntro: "Maigie is designed around the moments that make up real learning, with intelligence and learning spaces working together rather than as disconnected tools.",
  focusAreas: [
    { title: "Learn with context", description: "Carry the thread of a learning journey across questions and sessions, so each interaction can build on what came before." },
    { title: "Ask and understand", description: "Use an intelligent learning companion to explore ideas, ask follow-up questions and work towards clearer understanding." },
    { title: "Prepare and practise", description: "Bring preparation, revision and practice into the same broader learning journey rather than treating them as separate tasks." },
    { title: "Learn together", description: "Give educators and learners shared environments through Learning Spaces and Classrooms, while keeping individual learning in view." }
  ],
  audienceEyebrow: "WHO IT IS FOR",
  audienceTitle: "Designed around learners and the people who help them learn.",
  audiences: [
    { title: "Independent learners", description: "People who want a more connected way to explore subjects, ask questions and make progress at their own pace." },
    { title: "Educators", description: "Teachers and facilitators looking for an environment that supports guided learning and meaningful interaction with learners." },
    { title: "Learning communities", description: "Groups that want shared spaces for learning while preserving the context of each learner's journey." }
  ],
  closingLine: "We are building an environment that helps learning move forward.",
  visual: "maigie",
  externalUrl: "https://maigie.com",
  externalLabel: "Visit Maigie"
};

export default function MaigieVenturePage() {
  return <VentureDetailPage venture={venture} />;
}
