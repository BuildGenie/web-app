export type PublicServicePackage = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  currency: string;
  setupFee: number | string | null;
  recurringPrice: number | string | null;
  billingCadence?: string | null;
  configuration?: Record<string, unknown> | null;
};
export type PublicService = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description?: string | null;
  packages: PublicServicePackage[];
};

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.buildgenielabs.com/api/v1").replace(/\/$/, "");

export async function getPublicServices(): Promise<PublicService[]> {
  const response = await fetch(`${API_BASE}/public/services`, { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load BuildGenie services.");
  return response.json() as Promise<PublicService[]>;
}

export type PublicLeadInput = {
  email: string;
  contactName?: string;
  companyName?: string;
  phone?: string;
  serviceName?: string;
  source?: string;
  notes?: string;
  advisorContext?: string;
  website?: string;
};

export async function submitPublicLead(input: PublicLeadInput) {
  const response = await fetch(`${API_BASE}/public/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    const message = await response.json().catch(() => null) as { message?: string } | null;
    throw new Error(message?.message || "We couldn't save your enquiry. Please try again.");
  }
  return response.json() as Promise<{ id: string; companyName: string; contactName?: string | null; email: string; status: string; createdAt: string }>;
}
