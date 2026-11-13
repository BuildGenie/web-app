import type { Metadata } from "next";
import { VentureDetailPage, type VentureDetail } from "@/components/venture-detail-page";

export const metadata: Metadata = {
  title: "Cakkie | A Social Platform for Cake Enthusiasts",
  description: "Meet Cakkie, a BuildGenie venture creating a Nigerian social platform for cake enthusiasts, bakers and creators to discover, share and connect.",
  alternates: { canonical: "/ventures/cakkie" },
  openGraph: {
    type: "website",
    title: "Cakkie | A BuildGenie Venture",
    description: "A social platform bringing cake enthusiasts and creators together.",
    url: "/ventures/cakkie",
  },
};

const venture: VentureDetail = {
  number: "02",
  category: "FOOD & COMMUNITY",
  name: "Cakkie",
  headline: "A little more icing. A lot more community.",
  summary: "Cakkie is a social platform rooted in Nigeria's cake community — a place shaped around the people who love cakes, the creators who make them and the inspiration that connects them.",
  thesisEyebrow: "THE IDEA BEHIND CAKKIE",
  thesisTitle: "A shared love of cake can bring a whole community together.",
  thesis: [
    "Cake is more than a finished product. It is creativity, celebration, craft, culture and the joy of sharing something made with care. Around every cake is a story — the person who made it, the occasion it celebrates and the people who enjoy it.",
    "Cakkie is being built as a social platform that gives this interest a community of its own, starting with the energy and creativity of Nigeria's cake community. It brings the focus to cake enthusiasts and creators, rather than asking them to fit their passion into a general-purpose social experience.",
    "The ambition is to make it easier for people to discover inspiration, appreciate cake artistry and connect with others who share the same enthusiasm."
  ],
  focusEyebrow: "THE COMMUNITY EXPERIENCE",
  focusTitle: "A home for discovery, creativity and connection.",
  focusIntro: "Cakkie's product direction is centred on the relationships between people who enjoy cakes and the people who bring their ideas to life.",
  focusAreas: [
    { title: "Discover inspiration", description: "Explore the creativity, styles and ideas that make cake culture endlessly varied." },
    { title: "Celebrate the craft", description: "Give cake makers and enthusiasts a place where the detail, imagination and effort behind the work can be appreciated." },
    { title: "Share what you love", description: "Make it natural for people to share cake moments, inspiration and the creations that mean something to them." },
    { title: "Find your people", description: "Connect cake lovers, bakers and creators through a shared interest and a more focused community." }
  ],
  audienceEyebrow: "WHO IT IS FOR",
  audienceTitle: "For everyone who has a soft spot for cake.",
  audiences: [
    { title: "Cake enthusiasts", description: "People who enjoy discovering new cakes, following cake culture and sharing the things they love." },
    { title: "Bakers and cake artists", description: "Creators who put skill and imagination into their work and want to connect with an audience that appreciates it." },
    { title: "Cake communities", description: "People who want to find others with the same interest, exchange inspiration and celebrate creativity together." }
  ],
  closingLine: "We believe every passion deserves a place to gather.",
  visual: "cakkie"
};

export default function CakkieVenturePage() {
  return <VentureDetailPage venture={venture} />;
}
